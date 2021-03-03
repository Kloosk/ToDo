import styled from 'styled-components'

export const AddTodoStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 50vw;
  }
`;
export const Error = styled.p`
  display: block;
  color: ${props => props.theme.warning};
  font-size: 0.8rem;
`;
