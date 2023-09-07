import React from "react";
import { StyledPrice } from "./styles";

function Price({ price }) {
  return <StyledPrice>{price} €</StyledPrice>;
}

export default Price;
