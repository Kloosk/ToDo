import React from 'react';
import {Line} from "react-chartjs-2";
import {getActivity} from "helpers/activity/getActivity";

const LineChart = () => {
    return (
        <Line data={getActivity()}/>
    );
};

export default LineChart;