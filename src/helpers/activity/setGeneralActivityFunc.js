import store from "redux/store";
import {setGeneralActivity} from "redux/activityChart/activityChartActions";

export const setGeneralActivityFunc = day => {
    const weekActivityInitObj = {
        0:0,
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0
    };
    const weekActivityObj = localStorage.getItem("activity");

    if (weekActivityObj !== null) {//exists
        const weekActivityParseObj = JSON.parse(weekActivityObj);
        weekActivityParseObj[day]++;

        store.dispatch(setGeneralActivity(weekActivityParseObj));
        localStorage.setItem("activity", JSON.stringify(weekActivityParseObj));
    }else{
        weekActivityInitObj[day]++;

        store.dispatch(setGeneralActivity(weekActivityInitObj));
        localStorage.setItem("activity", JSON.stringify(weekActivityInitObj));
    }
};