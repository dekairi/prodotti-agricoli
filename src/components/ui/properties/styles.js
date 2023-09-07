import styled from "styled-components";
import P from "../../styled/p/p";
import { Li } from "/src/components/styled";

export const StyledLi = styled(Li)`
  display: flex;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledB = styled.b`
  color: ${(props) => props.theme.colorBlack};
  font-size: 14px;
  font-weight: 700;
  line-height: 150%;
`;

export const StyledP = styled(P)`
  color: ${(props) => props.theme.colorBlack};
  font-size: 14px;
  line-height: 150%;
`;
