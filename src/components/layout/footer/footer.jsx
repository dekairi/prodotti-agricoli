import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { Copyright, StyledSection } from "./styles";

function Footer() {
  return (
    <StyledSection as="footer">
      <Logo />
      <Copyright>Creato 2023</Copyright>
    </StyledSection>
  );
}

export default Footer;
