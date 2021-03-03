import React, {useEffect, useState} from 'react';
import {TimeTag} from "components/time/Time.style";
import {getTime} from "../../helpers/getTime";

const Time = () => {
    const [time,setTime] = useState("");
    useEffect(() => {
        setTime(getTime());
    },[]);
    return (
        <TimeTag>{time}</TimeTag>
    );
};

export default Time;