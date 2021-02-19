import {ADD_THING, SET_COUNT, SET_COUNT_BUSINESS, SET_COUNT_PERSONAL} from "./ThingTypes";

export const addThing = (payload) => {
    return{
        type: ADD_THING,
        payload
    }
};
export const setCount = (payload) => {
    return{
        type: SET_COUNT,
        payload
    }
};
export const setCountPersonal = (payload) => {
    return{
        type: SET_COUNT_PERSONAL,
        payload
    }
};
export const setCountBusiness = (payload) => {
    return{
        type: SET_COUNT_BUSINESS,
        payload
    }
};
export const getThings = () => dispatch => {
    const objOfThings = localStorage.getItem("things");
    if (objOfThings !== null) {
        //wszystko w obiekcie
        console.log(JSON.parse(objOfThings));
        const {things,count,countBusiness,countPersonal} = JSON.parse(objOfThings);
        dispatch(addThing(things));
        dispatch(setCount(count));
        dispatch(setCountBusiness(countBusiness));
        dispatch(setCountPersonal(countPersonal));
    }
};
