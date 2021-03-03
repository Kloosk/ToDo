import {getDoneActivity} from "helpers/activity/getDoneActivity";
import {getGeneralActivity} from "helpers/activity/getGeneralActivity";
import {themes} from "assets/themes/themes";

const generalActivity = getGeneralActivity();
const doneActivity = getDoneActivity();
const {chartFirstAlpha,chartSecondAlpha} = themes;
export const activityData = {
    labels: ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"],
    datasets: [
        {
            label: 'General activity during week',
            data: generalActivity,
            borderColor: [chartFirstAlpha],
            backgroundColor: [chartFirstAlpha],
            pointBackgroundColor: [chartFirstAlpha],
            pointBorderColor: [chartFirstAlpha]
        },
        {
            label: 'Done activity during week',
            data: doneActivity,
            borderColor: [chartSecondAlpha],
            backgroundColor: [chartSecondAlpha],
            pointBackgroundColor: [chartSecondAlpha],
            pointBorderColor: [chartSecondAlpha]
        }
    ]
};