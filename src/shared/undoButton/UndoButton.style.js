import styled from 'styled-components'
import {Link} from "react-router-dom";

export const Button = styled.button`
  border: none;
  outline: none;
  background: none;
`;
export const LinkRouter = styled(Link)`
  text-decoration: none;
`;
export const Svg = styled.svg`
  color: ${props => props.theme.btnBg};
  height: 25px;
`;


