import "./Button.scss";
import { FC } from "react";

export type ButtonProps = {
  buttonType?: string;
  buttonContent: string;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({ buttonType, buttonContent, ...other }) => {
  return (
    <button className={`button-container ${buttonType}`} {...other}>
      {buttonContent}
    </button>
  );
};

export default Button;
