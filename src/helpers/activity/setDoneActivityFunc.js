import store from "redux/store";
import {setDoneActivity} from "redux/activityChart/activityChartActions";

export const setDoneActivityFunc = (day) => {
    const weekDoneActivityInitObj = {
        0:0,
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0
    };
    const weekDoneActivityObj = localStorage.getItem("doneactivity");

    if (weekDoneActivityObj !== null) {//exists
        const weekDoneActivityParseObj = JSON.parse(weekDoneActivityObj);
        weekDoneActivityParseObj[day]++;

        store.dispatch(setDoneActivity(weekDoneActivityParseObj));
        localStorage.setItem("doneactivity", JSON.stringify(weekDoneActivityParseObj));
    }else{
        weekDoneActivityInitObj[day]++;

        store.dispatch(setDoneActivity(weekDoneActivityInitObj));
        localStorage.setItem("doneactivity", JSON.stringify(weekDoneActivityInitObj));
    }
};