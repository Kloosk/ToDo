import styled from "styled-components";

export const Done = styled.div`
   width: 35px;
   height: 35px;
   border-radius: 50%;
   margin-right: 10px;
   border: 1px solid  ${props => props.done ? props.theme.lightGreen : props.theme.lightBlue };
   position: relative;
`;
export const Title = styled.h1`
  font-size: 1rem;
  font-weight: 400;
`;
export const Place = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.gray};
`;
export const Time = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.gray};
`;
export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
export const Flex = styled.div`
  display: flex;
`;