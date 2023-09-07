import styled from "styled-components";
import { Section, Ul, Li } from "/src/components/styled";

export const StyledSection = styled(Section)`
  padding-bottom: 80px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const FeaturesList = styled(Ul)`
  margin-top: 44px;
  margin-bottom: 44px;
`;

export const FeaturesItem = styled(Li)`
  text-align: left;
  overflow: hidden;
`;
