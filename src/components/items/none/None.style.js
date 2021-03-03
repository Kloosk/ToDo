import styled from 'styled-components'
import {Link} from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  width: 90vw;
  transform: translate(-50%,-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  @media (min-width: 768px) {
    top: 50%;
  }
`;
export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 40px;
  color: ${props => props.theme.lightBlue};
  @media (min-width: 768px) {
    font-size: 3rem;
    width: 50%;
  }
`;
export const RouterLink = styled(Link)`
  text-decoration: none;
`;
export const Button = styled.button`
  font-size: 2rem;
  color: ${props => props.theme.white};
  background: ${props => props.theme.lightBlue};
  padding: 7px 14px;
  border: 3px solid ${props => props.theme.lightBlue};
  cursor: pointer;
  &:hover{
    transform: translateY(2px);
  }
  &:focus{
    outline: none;
    border: 3px solid ${props => props.theme.lightBlue};
  }
   @media (min-width: 768px) {
    font-size: 3rem;
  }
`;