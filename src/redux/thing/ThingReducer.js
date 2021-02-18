import {ADD_THING,SET_COUNT,SET_COUNT_BUSINESS,SET_COUNT_PERSONAL} from "./ThingTypes";

const initialState = {
    things: [],
    count: 0,
    countPersonal: 0,
    countBusiness: 0
};

const thingReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_THING:{
            return{
                ...state,
                things: action.payload
            }
        }
        case SET_COUNT:{
            return{
                ...state,
                count: action.payload
            }
        }
        case SET_COUNT_BUSINESS:{
            return{
                ...state,
                countBusiness: action.payload
            }
        }
        case SET_COUNT_PERSONAL:{
            return{
                ...state,
                countPersonal: action.payload
            }
        }
        default: return state
    }
};

export default thingReducer;