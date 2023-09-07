import React from "react";
import { Price, StyledP } from "./styles";

function Description({ description, price, weight }) {
  return (
    <>
      <StyledP>{description}</StyledP>
      <Price>{`${price} € / ${weight}`}</Price>
    </>
  );
}

export default Description;
