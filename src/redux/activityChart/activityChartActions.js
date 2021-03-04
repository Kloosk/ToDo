import {SET_DONE_ACTVITY,SET_GENERAL_ACTVITY} from "redux/activityChart/activityChartTypes";

export const setDoneActivity = (payload) => {
    return {
        type: SET_DONE_ACTVITY,
        payload
    }
};
export const setGeneralActivity = (payload) => {
    return{
        type: SET_GENERAL_ACTVITY,
        payload
    }
};

export const getActivity = () => dispatch => {
    const generalActivity = JSON.parse(localStorage.getItem("activity"));
    const doneActivity = JSON.parse(localStorage.getItem("doneactivity"));

    dispatch(setGeneralActivity(generalActivity === null ? {} : generalActivity));
    dispatch(setDoneActivity(doneActivity === null ? {} : doneActivity));
};