import React, {useEffect} from 'react';
import {Container} from "containers/dashboard/Dashboard.style";
import AddButton from "shared/addButton/AddButton";
import NavDashboard from "components/navDashboard/NavDashboard";
import Completed from "components/completed/Completed";
import Items from "components/items/Items";
import {getThings} from "../../redux/thing/ThingActions";
import {useDispatch} from "react-redux";
import HamMenu from "components/hamMenu/HamMenu";

const Dashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getThings());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
      <Container>
          <HamMenu/>
          <NavDashboard/>
          <Items/>
          <Completed/>
          <AddButton link="/add"/>
      </Container>
    );
};

export default Dashboard;