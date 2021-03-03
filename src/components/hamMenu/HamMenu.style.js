import styled from 'styled-components'

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.darkBlue};
  z-index: 999;
  width: 100vw;
  height: 50vh;
  border: 2px solid ${props => props.theme.lightBlue};
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 1s ease;
  overflow: hidden;
  padding-top: 35px;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    width: 380px;
    height: 40vh;
  }
`;
export const Ul = styled.ul`
  width: 100%;
  list-style: none;
`;
export const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  text-transform: uppercase;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.lightBlue};
  outline: none;
  margin-bottom: 2px;
  transition: transform 0.2s ease;
  :hover{
    transform: scale(1.1);
  }
`;
export const ExitBtn = styled.button`
  position: absolute;
  top: 1px;
  right: 1px;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      background-color: white;
      height: 2px;
      left: 50%;
      top: 50%;
      width: 30px;
    }
    &::before {
      transform: translate(-50%,-50%) rotate(45deg); 
    }
    &::after {
      transform: translate(-50%,-50%) rotate(-45deg);
    }
`;

