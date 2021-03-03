import styled from "styled-components";

export const Container = styled.main`
  width: 90%;
  height: 60vh;
  margin: 0 auto;
  padding: 10px 0;
  overflow-y: auto;
  @media (min-width: 768px) {
    overflow: hidden;
    height: auto;
    width: 90%;
    display: grid;
    grid-gap: 0 40px;
    grid-template-columns: repeat(2,1fr);
  }
  @media (min-width: 1024px) {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
  }
`;