import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGoogelPopup,
  creatUserDocFromAuth,
} from "../utils/firebase";
import Form from "./FormInput";
import "./SignInForm.scss";
import Button from "./Button";

const SignInForm = () => {
  const defaultformFileds = {
    email: "",
    password: "",
  };
  const [formFileds, setFormFileds] = useState(defaultformFileds);
  const { email, password } = formFileds;

  function handelChange(event) {
    const { name, value } = event.target;
    // In JavaScript, when you want to use a variable as a property key in an object, you need to use bracket notation
    setFormFileds({ ...formFileds, [name]: value }); // need name here is string,but here is varible, so [name]
  }

  const logGoogelUserPopUp = async () => {
    /*    const response = await signInWithGoogelPopup(); //whenever call to database, always be asynchronous
    console.log(response); //displayName: "Wanting Peng",email: "wantingpeng.mia@gmail.com",emailVerified: true
    //user: Object { providerId: "firebase", uid: "gtKcz8zR1sb6ybQ8Y6zyRxaBos72", accessToken: ..............
 */
    const { user } = await signInWithGoogelPopup(); // cauese we only need the uid in user obj in response
    console.log(user); //displayName,email, uid
    await creatUserDocFromAuth(user); //got Userdata from firestore so awaite
  };

  async function handSubmit(event) {
    //generating a user doc
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      setFormFileds(defaultformFileds);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <Button
        buttonType="google-sign-in"
        onClick={logGoogelUserPopUp}
        buttonContent="sign in with googel"
      />

      <span>Sign in with your email and password</span>
      <form onSubmit={handSubmit}>
        <Form
          label="Email"
          type="email"
          required
          value={email}
          name="email"
          onChange={handelChange}
        />

        <Form
          label="Password"
          type="password"
          required
          value={password}
          name="password"
          onChange={handelChange}
        />

        <Button type="submit" buttonContent="sign in" buttonType="" />
      </form>
    </div>
  );
};

export default SignInForm;
