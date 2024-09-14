import { useState } from "react";
import {
  creatUserDocFromEmailPassword,
  creatUserDocFromAuth,
} from "../utils/firebase";
import Form from "./FormInput";
import "./SignUpForm.scss";
import Button from "./Button";

/* import { UserContext } from "../context/UserContext"; */

const SignUpForm = () => {
  const defaultformFileds = {
    displayName: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  };
  const [formFileds, setFormFileds] = useState(defaultformFileds);
  const { displayName, email, password, ConfirmPassword } = formFileds;

  /*   const { setCurrentUser } = useContext(UserContext); */

  function handelChange(event) {
    const { name, value } = event.target;
    // In JavaScript, when you want to use a variable as a property key in an object, you need to use bracket notation
    setFormFileds({ ...formFileds, [name]: value }); // need name here is string,but here is varible, so [name]
  }

  async function handSubmit(event) {
    //generating a user doc

    event.preventDefault();
    if (password !== ConfirmPassword) {
      alert("password unequal ConfirmPassword");
      return;
    } //confirm password
    try {
      // when we call firebase we might fail
      const response = await creatUserDocFromEmailPassword(email, password); //authentication
      //user: {displayName: null email: "wantingpeng.mia@gmail.com" uid:........}

      /*    setCurrentUser(response.user); */

      await creatUserDocFromAuth(response.user, {
        displayName,
      }); //creat User document in forestore
      setFormFileds(defaultformFileds);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handSubmit}>
        <Form
          label="displayName"
          type="text"
          required
          value={displayName}
          name="displayName"
          onChange={handelChange}
        />

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

        <Form
          label="Confirm Password"
          type="password"
          required
          value={ConfirmPassword}
          name="ConfirmPassword"
          onChange={handelChange}
        />

        <Button type="submit" buttonContent="sign up" buttonType=""></Button>
      </form>
    </div>
  );
};

export default SignUpForm;
