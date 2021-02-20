import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   height: ${props => props.collapse ? '100px' : '50px'};
   margin-bottom: 5px;
   border-bottom: 1px solid ${props => props.theme.gray};
   transition: height 0.1s ease;
`;
export const Done = styled.div`
   width: 35px;
   height: 35px;
   border-radius: 50%;
   margin-right: 10px;
   border: 1px solid #2EBAEE;;
   position: relative;
`;
export const Svg = styled.svg`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   width: 25px;
   height: 25px;
   color: #2EBAEE;;
`;
export const H1 = styled.h1`
  font-size: 1rem;
  font-weight: 400;
`;
export const P = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.gray};
`;
export const Time = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.gray};
`;
export const UpperPart = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
export const LowerPart = styled.div`
  width: 100%;
  height: 50px;
  visibility: ${props => props.collapse ? 'visible' : 'hidden'};
  opacity: ${props => props.collapse ? '1' : '0'};
  display: flex;
  justify-content: flex-end;
  transition: opacity 0.1s ease;
`;
export const Flex = styled.div`
  display: flex;
`;
export const ButtonToolbar = styled.button`
  border: 1px solid #2EBAEE;
  background: transparent;
  outline: none;
  height: 40px;
  width: 40px;
  margin-right: 5px;
  position: relative;
  border-radius: 50%;
`;
export const SvgToolbar = styled.svg`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   width: 25px;
   height: 25px;
   color: #2EBAEE;
`;
