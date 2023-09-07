import React from "react";
import { StyledP, StyledB, StyledLi } from "./styles";
import { Ul } from "/src/components/styled";

function Properties({ energyValue, nutritionalValue }) {
  return (
    <Ul>
      <StyledLi>
        <StyledB>Energia:&nbsp;</StyledB>
        <StyledP>{energyValue}</StyledP>
      </StyledLi>
      <StyledLi>
        <StyledB>Valori nutriz. medi:&nbsp;</StyledB>
        <StyledP>{nutritionalValue}</StyledP>
      </StyledLi>
    </Ul>
  );
}

export default Properties;
