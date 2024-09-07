import "./Button.scss";
const Button = ({ buttonType, buttonContent, ...other }) => {
  return (
    <div className={`button-container ${buttonType}`} {...other}>
      {buttonContent}
    </div>
  );
};

export default Button;
