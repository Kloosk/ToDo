import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
`;
export const H1 = styled.h1`
  font-size: 1rem;
  color: ${props => props.theme.color};
  letter-spacing: 1.5px;
`;