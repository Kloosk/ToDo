import styled from "styled-components";

export const Svg = styled.svg`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   width: 25px;
   height: 25px;
   color: ${props => props.done ? props.theme.lightGreen : props.theme.lightBlue };
`;