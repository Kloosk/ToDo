import styled from 'styled-components'
import bgDashboard from '../../assets/img/bgDashboard.jpg'

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background: url(${bgDashboard}) no-repeat center/cover;
  z-index: 999;
  width: 60vw;
  height: 50vh;
  border: 2px solid ${props => props.theme.btnBg};
  overflow: hidden;
`;
export const Ul = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  opacity: 0.8;
  background-color: #fff;
`;
export const Li = styled.li`
 
`;
export const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 2px solid ${props => props.theme.btnBg};
  cursor: pointer;
  font-size: 1.1rem;
  text-transform: uppercase;
  color: ${props => props.theme.btnBg};
  outline: none;
  :hover{
    transform: scale(1.1);
  }
`;
