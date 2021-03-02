import styled from 'styled-components'

export const CounterText = styled.h1`
  font-size: 1.5rem;
  color: #ffffff;
  font-weight: 400;
`;
export const Title = styled.p`
  font-size: 0.7rem;
  color: ${props => props.theme.gray};
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FlexBlock = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  &:first-child{
    margin-right: 15px;
  }
  
`;
