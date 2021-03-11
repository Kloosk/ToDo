import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  visibility: ${props => props.collapse ? 'visible' : 'hidden'};
  opacity: ${props => props.collapse ? '1' : '0'};
  display: flex;
  justify-content: flex-end;
  transition: opacity 0.1s ease;
`;
export const ButtonToolbar = styled.button`
  border: 1px solid ${props => props.done ? props.theme.lightGreen : props.theme.lightBlue };
  background: transparent;
  outline: none;
  height: 40px;
  width: 40px;
  margin-right: 5px;
  position: relative;
  border-radius: 50%;
`;