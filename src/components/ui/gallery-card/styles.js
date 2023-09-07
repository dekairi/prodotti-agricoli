import styled from "styled-components";
import { Img } from "/src/components/styled";

export const ProductImage = styled(Img)`
  width: 248px;
  height: 248px;
  margin-right: ${(props) => props.theme.indent};
`;

export const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;

  div:first-child {
    margin-top: 16px;
    gap: 8px;
  }
`;
