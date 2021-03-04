import React, {useEffect} from 'react';
import {Container} from "containers/dashboard/Dashboard.style";
import AddButton from "shared/addButton/AddButton";
import NavDashboard from "components/navDashboard/NavDashboard";
import Completed from "components/completed/Completed";
import Items from "components/items/Items";
import {getThings} from "redux/thing/thingActions";
import {useDispatch} from "react-redux";
import HamMenu from "components/hamMenu/HamMenu";
import {getActivity} from "redux/activityChart/activityChartActions";

const Dashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getThings());
        dispatch(getActivity());
    },[dispatch]);
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