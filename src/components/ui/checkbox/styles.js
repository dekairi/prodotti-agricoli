import styled, { css } from "styled-components";
import tickImage from "/src/assets/tick.svg";

export const Label = styled.label`
  display: block;
`;

export const CheckboxLabel = styled.span`
  display: flex;
  height: 24px;
  width: 24px;
  justify-content: center;
  align-items: center;
  transition: color 0.2s ease-out, background-color 0.2s ease-out;
  cursor: pointer;
  ${(props) =>
    props.$isChecked
      ? css`
          border: 1px solid rgba(0, 0, 0, 0.1);
          background-color: ${(props) => props.theme.colorForButton};
          background-image: url(${tickImage});
          background-repeat: no-repeat;
          background-position: center;
        `
      : css`
          background-color: ${props.theme.colorGray};
          border: 1px solid rgba(0, 0, 0, 0.1);
        `}
`;
