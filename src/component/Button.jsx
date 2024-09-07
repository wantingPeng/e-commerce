import "./Button.scss";
const Button = ({ buttonType, buttonContent, ...other }) => {
  return (
    <button className={`button-container ${buttonType}`} {...other}>
      {buttonContent}
    </button>
  );
};

export default Button;
