import styled from "styled-components";

export const Container = styled.div`
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 0.9;
  z-index: 11;
`;
export const Window = styled.div`
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 7px 14px;
  border: 4px solid #BF0413;
  background: #F2B705;
  width: 80%;
  opacity: 1;
  z-index: 12;
  @media (min-width: 768px) {
    width: 400px;
    height: 200px;
  }
`;
export const Msg = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #000;
  @media (min-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0;
  }
`;
export const BtnMsg = styled.button`
  padding: 7px 14px;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 10px;
  border: 2px solid #BF0413;
  color: #000;
  &:hover{
    background: #F2B705;
  }
   @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3px;
  @media (min-width: 768px) {
    margin-top: 15px;
  }
`;