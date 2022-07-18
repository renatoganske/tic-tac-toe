import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: "submit" | "reset" | "button";
  label: string;
}
const Button = ({ buttonType, label, ...rest }: IButtonProps) => {
  return (
    <Container>
      <button {...rest} type={buttonType} name="clickButton">
        {label}
      </button>
    </Container>
  );
};

export default Button;
