import styled from 'styled-components'
import bgDashboard from '../../assets/img/bgDashboard.jpg'

export const Nav = styled.nav`
  width: 100%;
  height: 30vh;
  background: url(${bgDashboard}) no-repeat center/cover;
  padding: 15px;
`;
export const Flex = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;