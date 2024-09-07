import { useState } from "react";

const SignUpForm = () => {
  const [formFileds, setFormFileds] = useState({
    DisplayName: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });
  const { DisplayName, email, password, ConfirmPassword } = formFileds;

  function handelChange(event) {
    const { name, value } = event.target;
    // In JavaScript, when you want to use a variable as a property key in an object, you need to use bracket notation
    setFormFileds({ ...formFileds, [name]: value }); // need name here is string,but here is varible, so [name]
  }
  console.log(formFileds);

  return (
    <>
      <div className="sign-up-container"></div>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form action="">
        <label>Display Name</label>
        <input
          type="text"
          required
          value={DisplayName}
          name="DisplayName"
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
