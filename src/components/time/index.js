import React,{useEffect,useState} from 'react';
import {P} from "./style";
import {getTime} from "../../helpers/getTime";

const Time = () => {
    const [time,setTime] = useState("");
    useEffect(() => {
        setTime(getTime());
    },[]);
    return (
        <P>{time}</P>
    );
};

export default Time;