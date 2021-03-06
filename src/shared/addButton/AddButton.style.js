import {Link} from "react-router-dom";
import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background: ${props => props.theme.lightBlue};
  cursor: pointer;
`;
export const LinkRouter = styled(Link)`
  position: fixed;
  z-index: 10;
  bottom: 15px;
  right: 15px;
  text-decoration: none;
`;
export const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: ${props => props.theme.white};
  height: 20px;
  width: 20px
`;