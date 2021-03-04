import {SET_DONE_ACTVITY, SET_GENERAL_ACTVITY} from "redux/activityChart/activityChartTypes";

const initialState = {
    weekGeneralActivity: {
        0:0,
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0
    },
    weekDoneActivity: {
        0:0,
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0
    },

};
const activityChartReducer = (state=initialState,action) => {
    switch(action.type){
        case SET_DONE_ACTVITY:{
            return{
                ...state,
                weekDoneActivity: action.payload
            }
        }
        case SET_GENERAL_ACTVITY:{
            return{
                ...state,
                weekGeneralActivity: action.payload
            }
        }
        default: return state
    }
};

export default activityChartReducer;