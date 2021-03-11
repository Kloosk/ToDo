import React from 'react';
import {Line} from "react-chartjs-2";
import {Container} from "components/lineChart/LineChart.style";
import {useSelector} from "react-redux";
import {themes} from "assets/themes/themes";

const {chartFirstAlpha,chartSecondAlpha} = themes;
const LineChart = () => {
    const {weekGeneralActivity,weekDoneActivity} = useSelector(state => state.activityChartData);
    return (
        <Container>
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
        </Container>
    );
};

export default LineChart;