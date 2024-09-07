import { useState } from "react";
import {
  creatUserDocFromEmailPassword,
  creatUserDocFromAuth,
} from "../utils/firebase";
const SignUpForm = () => {
  const defaultformFileds = {
    displayName: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  };
  const [formFileds, setFormFileds] = useState(defaultformFileds);
  const { displayName, email, password, ConfirmPassword } = formFileds;

  function handelChange(event) {
    const { name, value } = event.target;
    // In JavaScript, when you want to use a variable as a property key in an object, you need to use bracket notation
    setFormFileds({ ...formFileds, [name]: value }); // need name here is string,but here is varible, so [name]
  }
  console.log(formFileds);

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
      /*  console.log(response);  */ //user: {displayName: null email: "wantingpeng.mia@gmail.com" uid:........}
      await creatUserDocFromAuth(response.user, {
        displayName,
      }); //creat User document in forestore
      setFormFileds(defaultformFileds);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <div className="sign-up-container"></div>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          value={displayName}
          name="displayName"
          onChange={handelChange}
        />

        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          name="email"
          onChange={handelChange}
        />

        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          name="password"
          onChange={handelChange}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          value={ConfirmPassword}
          name="ConfirmPassword"
          onChange={handelChange}
        />

        <button type="submit">sign up</button>
      </form>
    </>
  );
};

export default SignUpForm;
