import React from 'react';
import {Line} from "react-chartjs-2";

const data = {
    labels: ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"],
    datasets: [
        {
            label: 'Activity during the week',
            data: [1,2,3,4,5,6,18]
        }
    ]
};

const LineChart = () => {
    return (
        <Line data={data}/>
    );
};

export default LineChart;