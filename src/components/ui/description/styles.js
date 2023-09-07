import styled from "styled-components";
import P from "../../styled/p/p";

export const StyledP = styled(P)`
  margin-bottom: 18px;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  max-height: 70px;
  overflow-y: scroll;
`;

export const Price = styled.div`
  display: inline-block;
  padding: 4px 8px;
  background-color: ${(props) => props.theme.colorForBackground};
  font-size: 14px;
  font-weight: 700;
  line-height: 150%;
`;
