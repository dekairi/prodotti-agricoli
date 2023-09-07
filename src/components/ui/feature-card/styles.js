import styled from "styled-components";
import { featureType } from "./feature-card";
import { Img, P } from "/src/components/styled";

export const StyledFeatureCard = styled.article`
  width: 540px;
  min-height: 197px;
  padding: ${(props) => props.theme.indent};
  background-color: ${(props) => {
    let backgroundColor = props.theme.colorForGreenBackground;
    if (props.$type === featureType.negozio) {
      backgroundColor = props.theme.colorForRedBackground;
    }
    return backgroundColor;
  }};
  box-sizing: border-box;
`;

export const Image = styled(Img)`
  float: left;
  width: 56px;
  height: 56px;
  margin-right: ${(props) => props.theme.indent};
`;

export const StyledType = styled(P)`
  display: inline-block;
  padding: 2px 10px;
  color: ${(props) => props.theme.colorWhite};
  font-size: 14px;
  background-color: ${(props) => {
    let backgroundColor = props.theme.colorForGreenHeader;
    if (props.$type === featureType.negozio) {
      backgroundColor = props.theme.colorForRedHeader;
    }
    return backgroundColor;
  }};
`;

export const StyledText = styled(P)`
  clear: both;
  margin-top: 20px;
`;
