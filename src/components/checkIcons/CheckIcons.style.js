import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px auto 0 auto;
  padding-bottom: 5px;
  width: 140px;
`;
export const SelectionElement = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid #2ebaee;
  border-radius: 50%;
  position: relative;
  &:first-child {
    margin-right: 10px;
  }
`;
export const Icon = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  color: #2ebaee;
`;
export const Underline = styled.hr`
  margin: 0 auto;
  transform: ${props => props.choice ? "translateX(-35px)" : "translateX(35px)"};
  transition: transform 1s ease;
  width: 65px;
  height: 2px;
  border: none;
  background-color: #2ebaee;
`;
