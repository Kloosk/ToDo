import styled from "styled-components";

export const Container = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid ${props => props.theme.lightBlue};
  border-radius: 50%;
  position: relative;
  &:first-child {
    margin-right: 10px;
  }
`;