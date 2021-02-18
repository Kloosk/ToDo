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
export const getThings = () => (dispatch) => {
    const things = localStorage.getItem("things");
    if (things !== null) {
        //wszystko w obiekcie
        const data = JSON.parse(things);
        let personalCounter = 0;
        let businessCounter = 0;
        dispatch(addThing(data));
        dispatch(setCount(data.length));
        data.forEach(({type}) => type === "personal" ? personalCounter++ : businessCounter++);
        dispatch(setCountBusiness(businessCounter));
        dispatch(setCountPersonal(personalCounter));
    }
};
