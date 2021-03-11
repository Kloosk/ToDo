import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   height: ${props => props.collapse ? '100px' : '50px'};
   margin-bottom: 5px;
   border-bottom: 1px solid ${props => props.theme.gray};
   transition: height 0.1s ease;
`;
