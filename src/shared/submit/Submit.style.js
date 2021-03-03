import styled from 'styled-components'

export const Button = styled.button`
  margin-top: 20px;
  height: 50px;
  width: 100%;
  border: none;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.lightBlue};
  text-transform: uppercase;
  font-size: 1.2rem;
  outline: none;
  cursor: pointer;
  &:hover{
    transform: translateY(2px);
  }
`;
