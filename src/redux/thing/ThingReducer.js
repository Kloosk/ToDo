import {ADD_THING} from "./ThingTypes";

const initialState = {
    things: []
};

const thingReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_THING:{
            return{
                things: [...state,action.payload]
            }
        }
        default: return state
    }
};

export default thingReducer;