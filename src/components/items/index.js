import React,{useState,useEffect} from 'react';
import {Container} from "./style";
import Item from "../item";

const Items = () => {
    const [things,setThings] = useState([]);
    useEffect(() => {
        const localThings = localStorage.getItem("things");
        if (localThings !== null) {
            setThings(JSON.parse(localThings));
        }
    },[]);
    return (
        <Container>
            {things.map(({type,name,place,time},id) => <Item key={id} type={type} name={name} place={place} time={time}/>)}
        </Container>
    );
};

export default Items;