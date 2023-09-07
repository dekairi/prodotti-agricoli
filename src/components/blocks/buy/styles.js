import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 353px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: ${(props) => props.theme.indent};
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);

  & input {
    margin: 24px 0 20px 0;
  }

  & button {
    width: 100%;
    margin-top: 30px;
  }
`;
