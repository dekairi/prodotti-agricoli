import styled from "styled-components";
import { Section, P } from "/src/components/styled";
import aboutImage from "/src/assets/uomo.svg";

export const StyledSection = styled(Section)`
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 183px;
  padding-bottom: 145px;
  padding-right: 553px;
  background-color: ${(props) => props.theme.colorForBackground};
  align-items: center;

  &::after {
    position: absolute;
    bottom: 0;
    right: ${(props) => props.theme.pagePadding};
    display: block;
    content: "";
    width: 446px;
    height: 563px;
    margin: auto;
    background-image: url(${aboutImage});
  }
`;

export const TextWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  min-width: 650px;
  z-index: 3;
`;

export const Text = styled(P)`
  margin-top: 24px;
  padding-right: 122px;
  margin-bottom: 40px;
`;
