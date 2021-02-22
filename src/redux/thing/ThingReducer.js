import {
    ADD_THING,
    CLEAR_ALL,
    REMOVE_THING,
    SET_COUNT,
    SET_COUNT_BUSINESS,
    SET_COUNT_PERSONAL,
    SET_DONE
} from "./ThingTypes";

const initialState = {
    thingsTodo: [],
    count: 0,
    countPersonal: 0,
    countBusiness: 0
};

const thingReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_THING:{
            return{
                ...state,
                thingsTodo: action.payload
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
        case REMOVE_THING:{
            return {
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
            return initialState
        }
        default: return state
    }
};

export default thingReducer;