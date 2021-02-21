import React,{useEffect} from 'react';
import {Container} from "./style";
import AddButton from "../../shared/addButton";
import NavDashboard from "../../components/navDashboard";
import Completed from "../../components/completed";
import Items from "../../components/items";
import {getThings} from "../../redux/thing/ThingActions";
import {useDispatch} from "react-redux";
import HamMenu from "../../components/hamMenu/hamMenu";

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