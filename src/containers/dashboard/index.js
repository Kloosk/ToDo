import React from 'react';
import {Container} from "./style";
import AddButton from "../../shared/addButton";
import NavDashboard from "../../components/navDashboard";
import Completed from "../../components/completed";
import Items from "../../components/items";

const Dashboard = () => {
    return (
      <Container>
          <NavDashboard/>
          <Items/>
          <Completed/>
          <AddButton link="/add"/>
      </Container>
    );
};

export default Dashboard;