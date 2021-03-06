import {CLEAR_ALL, SET_ALL_OBJ, SET_DONE} from "redux/thing/thingTypes";

const initialState = {
    empty: true,
    thingsTodo: [],
    count: 0,
    countPersonal: 0,
    countBusiness: 0
};

const thingReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_ALL_OBJ:{
            return{
                empty: action.payload.empty,
                thingsTodo: action.payload.thingsTodo,
                count: action.payload.count,
                countPersonal: action.payload.countPersonal,
                countBusiness: action.payload.countBusiness
            }
        }
        case SET_DONE:{
            return{
                ...state,
                thingsTodo: action.payload
            }
        }
        case CLEAR_ALL:{
            return{
                empty: true,
                ...initialState
            }
        }
        default: return state
    }
};

export default thingReducer;