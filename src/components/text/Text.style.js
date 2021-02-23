import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: 1.5rem;
  color: #ffffff;
  letter-spacing: 2px;
  font-weight: 400;
  &:nth-child(even){
    margin-top: 2px;
  }
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;