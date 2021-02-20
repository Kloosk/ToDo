import styled from 'styled-components'

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 60vw;
  height: 50vh;
  border: 2px solid ${props => props.theme.btnBg};
  visibility: ${props => props.menuStatus ? "visible" : "hidden"};
  background-color: #fff;
`;
export const Ul = styled.ul`
  width: 100%;
  list-style: none;
`;
export const Li = styled.li`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid ${props => props.theme.btnBg};;
  display: block;
  text-align: center;
  cursor: pointer;
  font-size: 1.2rem;
  :hover{
    transform: translateX(2px);
  }
`;