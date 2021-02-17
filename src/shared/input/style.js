import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #D3D3D3;
  background: transparent;
  color: #ffffff;
  padding: 10px 10px;
  margin-bottom: 20px;
  &:focus{
   border: none;
   border-bottom: 1px solid #ffffff;
   outline: none;
  }
  &::placeholder{
    color: #D3D3D3;
  }
`;
