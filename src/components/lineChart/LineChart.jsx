import React from 'react';
import {activityData} from "helpers/activity/getActivityData";
import {Line} from "react-chartjs-2";
import {Container} from "components/lineChart/LineChart.style";

const LineChart = () => {
    return (
        <Container>
<<<<<<< Updated upstream
            <Line data={activityData} options={{scales: {yAxes:[{ticks:{min:0,stepSize:1}}]}}}/>
=======
            <Line data={{
                labels: ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"],
                datasets: [
            {
                label: 'General activity during week',
                data: Object.values(weekGeneralActivity),
                borderColor: [chartFirstAlpha],
                backgroundColor: [chartFirstAlpha],
                pointBackgroundColor: [chartFirstAlpha],
                pointBorderColor: [chartFirstAlpha]
            },
            {
                label: 'Done activity during week',
                data: Object.values(weekDoneActivity),
                borderColor: [chartSecondAlpha],
                backgroundColor: [chartSecondAlpha],
                pointBackgroundColor: [chartSecondAlpha],
                pointBorderColor: [chartSecondAlpha]
            }
                ]
            }}/>
>>>>>>> Stashed changes
        </Container>
    );
};

export default LineChart;