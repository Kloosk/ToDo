import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 25px;
  left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.p`
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-right: 5px;
`;
export const Circle = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${props => props.theme.gray};
  color: ${props => props.theme.white};
  text-align: center;
  border-radius: 50%;
`;
