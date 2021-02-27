import React from 'react';
import {Line} from "react-chartjs-2";
import {activityData} from "helpers/activity/getActivityData";


const LineChart = () => {
    return (
        <Line data={activityData}/>
    );
};

export default LineChart;