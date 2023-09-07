import styled from "styled-components";
import Title from "/src/components/ui/title/title";

export const TitleList = styled.div`
  display: inline-flex;
  overflow: hidden;
`;

export const TitleButton = styled.button`
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  box-shadow: none;
  display: block;
  background-color: ${(props) =>
    props.active ? props.theme.colorForGreenHeader : "none"};
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const TitleText = styled(Title)`
  color: ${(props) =>
    props.active ? props.theme.colorWhite : props.theme.colorBlackForText};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`;

export const Content = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
