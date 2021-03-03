import styled from 'styled-components';

export const Container = styled.div`
   position: absolute;
   bottom: 0;
   left: 50%;
   transform: translateX(-50%);
   margin-bottom: 5px;
   background-color: ${props => props.theme.white};
   width: 98%;
   @media (min-width: 768px) {
     width: 350px;
   }
`;