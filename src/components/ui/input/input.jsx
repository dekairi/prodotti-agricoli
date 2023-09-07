import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 14px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: ${(props) => props.theme.colorGray};
  color: ${(props) => props.theme.colorBlackForText};
  font-size: 14px;
  font-style: normal;
  line-height: ${(props) => props.theme.lineHeightDefault};
`;

function Input({ placeholder, name, ...props }) {
  return (
    <StyledInput placeholder={placeholder} name={name} {...props} type="text" />
  );
}

export default Input;
