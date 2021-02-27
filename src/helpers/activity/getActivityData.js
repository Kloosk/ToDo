import {getDoneActivity} from "helpers/activity/getDoneActivity";
import {getGeneralActivity} from "helpers/activity/getGeneralActivity";

const generalActivity = getGeneralActivity();
const doneActivity = getDoneActivity();
export const activityData = {
    labels: ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"],
    datasets: [
        {
            label: 'General activity during week',
            data: generalActivity,
            borderColor: ['#003f5c'],
            backgroundColor: ['#003f5c'],
            pointBackgroundColor: ['#003f5c'],
            pointBorderColor: ['#003f5c']
        },
        {
            label: 'Done activity during week',
            data: doneActivity,
            borderColor: ['#ffa600'],
            backgroundColor: ['#ffa600'],
            pointBackgroundColor: ['#ffa600'],
            pointBorderColor: ['#ffa600']
        }

    ]
};