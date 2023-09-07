import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledSection = styled(Section)`
  gap: ${(props) => props.theme.indent};
  position: absolute;
  top: ${(props) => props.theme.footerHeight};
  bottom: ${(props) => props.theme.footerHeight};
  display: flex;
  padding-top: 40px;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.colorGray};
  max-width: ${(props) => props.theme.pageWidth};
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.indent};
  overflow-y: scroll;
  max-height: 100%;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
