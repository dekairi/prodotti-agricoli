import React from "react";
import { StyledP, StyledB, StyledLi } from "./styles";
import { Ul } from "/src/components/styled";

function Characteristics({ exactWeight, expire, race, origin }) {
  return (
    <Ul>
      <StyledLi>
        <StyledB>Peso:&nbsp;</StyledB>
        <StyledP>{exactWeight}</StyledP>
      </StyledLi>
      <StyledLi>
        <StyledB>Data di scadenza:&nbsp;</StyledB>
        <StyledP>{expire} giorni</StyledP>
      </StyledLi>
      <StyledLi>
        <StyledB>Razza:&nbsp;</StyledB>
        <StyledP>{race}</StyledP>
      </StyledLi>
      <StyledLi>
        <StyledB>Luogo d'origine:&nbsp;</StyledB>
        <StyledP>{origin}</StyledP>
      </StyledLi>
    </Ul>
  );
}

export default Characteristics;
