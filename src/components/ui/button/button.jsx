import React from "react";
import { StyledButton } from "./styles";

function Button({ children, link, className, onClick, ...props }) {
  return (
    <StyledButton
      {...props}
      {...(link
        ? { to: link }
        : { as: "button", onClick, type: props.type || "button" })}
      className={className}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
