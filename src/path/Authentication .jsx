import "./Authentication.scss";
import SignUpForm from "../component/SignUpForm";
import SignInForm from "../component/SignInForm";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
