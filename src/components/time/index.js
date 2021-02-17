import React,{useEffect,useState} from 'react';
import {P} from "./style";

const Time = () => {
    const MONTHS = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const [time,setTime] = useState("");
    useEffect(() => {
        const now = new Date();
        setTime(`${MONTHS[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`)
    },[]);
    return (
        <P>{time}</P>
    );
};

export default Time;