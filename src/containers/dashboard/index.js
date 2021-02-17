import React from 'react';
import {Container} from "./style";
import AddButton from "../../shared/addButton";
import NavDashboard from "../../components/navDashboard";
import Completed from "../../components/completed";

const Dashboard = () => {
    return (
      <Container>
          <NavDashboard/>
          <Completed/>
          <AddButton link="/add"/>
      </Container>
    );
};

export default Dashboard;