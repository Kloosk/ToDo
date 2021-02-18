import {ADD_THING} from "./ThingTypes";

export const addThing = (payload) => {
    return{
        type: ADD_THING,
        payload
    }
};