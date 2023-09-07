import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  min-width: 260px;
  max-width: 700px;
  font-weight: 700;
  line-height: ${(props) => props.theme.lineHeightDefault};
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorForButton};
  text-align: center;
  text-decoration: none;
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.14) inset;
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    filter: grayscale();
  }
`;
