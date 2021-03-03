import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${props => props.theme.gray};
  background: transparent;
  color: ${props => props.theme.white};
  padding: 10px 10px;
  margin-bottom: 20px;
  &:focus{
   border: none;
   border-bottom: 1px solid ${props => props.theme.white};
   outline: none;
  }
  &::placeholder{
    color: ${props => props.theme.gray};
  }
`;
