import styled from "styled-components";

export const InputSelect = styled.select`
  width: 100%;
  background: transparent;
  color: ${props => props.theme.white};
  padding: 10px 10px;
  margin-bottom: 20px;
  border: none;
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.gray};
  outline: none;
`;
export const Option = styled.option`
  background-color: ${props => props.theme.darkBlue};
`;
