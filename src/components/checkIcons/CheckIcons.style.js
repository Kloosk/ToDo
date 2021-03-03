import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px auto 0 auto;
  padding-bottom: 5px;
  width: 140px;
`;

export const Underline = styled.hr`
  margin: 0 auto;
  transform: ${props => props.choice ? "translateX(-35px)" : "translateX(35px)"};
  transition: transform 1s ease;
  width: 65px;
  height: 2px;
  border: none;
  background-color: ${props => props.theme.lightBlue};
`;
