import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding-bottom: 5px;
   border-bottom: 1px solid ${props => props.theme.gray};
   margin-top: 10px;
   &:last-child{
    border-bottom: none;
   }
`;
export const Done = styled.button`
   width: 35px;
   height: 35px;
   background-color: #fff;
   border-radius: 50%;
   border: 1px solid #49A8E9;
   outline: none;
   position: relative;
`;
export const Svg = styled.svg`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   width: 25px;
   height: 25px;
   color: #49A8E9;
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

