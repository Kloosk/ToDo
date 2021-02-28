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
            borderColor: ['rgba(0, 63, 92, 0.2)'],
            backgroundColor: ['rgba(0, 63, 92, 0.2)'],
            pointBackgroundColor: ['rgba(0, 63, 92, 0.2)'],
            pointBorderColor: ['rgba(0, 63, 92, 0.2)']
        },
        {
            label: 'Done activity during week',
            data: doneActivity,
            borderColor: ['rgba(255, 166, 0, 0.2)'],
            backgroundColor: ['rgba(255, 166, 0, 0.2)'],
            pointBackgroundColor: ['rgba(255, 166, 0, 0.2)'],
            pointBorderColor: ['rgba(255, 166, 0, 0.2)']
        }
    ]
};