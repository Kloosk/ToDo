import React from 'react';
import {activityData} from "helpers/activity/getActivityData";
import {Line} from "react-chartjs-2";
import {Container} from "components/lineChart/LineChart.style";

const LineChart = () => {
    return (
        <Container>
            <Line data={activityData} options={{scales: {yAxes:[{ticks:{min:0,stepSize:1}}]}}}/>
        </Container>
    );
};

export default LineChart;