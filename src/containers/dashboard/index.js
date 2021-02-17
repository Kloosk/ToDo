import React from 'react';
import {Container} from "./style";
import AddButton from "../../shared/addButton";
import NavDashboard from "../../components/navDashboard";

const Dashboard = () => {
    return (
      <Container>
          <NavDashboard/>
          <AddButton link="/add"/>
      </Container>
    );
};

export default Dashboard;