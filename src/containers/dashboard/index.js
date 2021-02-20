import React,{useEffect} from 'react';
import {Container} from "./style";
import AddButton from "../../shared/addButton";
import NavDashboard from "../../components/navDashboard";
import Completed from "../../components/completed";
import Items from "../../components/items";
import {getThings} from "../../redux/thing/ThingActions";
import {useDispatch} from "react-redux";
import HamMenu from "../../components/hamMenu/hamMenu";
import {hamMenuClose} from "../../redux/hamMenu/hamMenuActions";

const Dashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getThings());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
      <Container>
          <HamMenu/>
          <div onClick={() => dispatch(hamMenuClose())}>
          <NavDashboard/>
          <Items/>
          <Completed/>
          <AddButton link="/add"/>
          </div>
      </Container>
    );
};

export default Dashboard;