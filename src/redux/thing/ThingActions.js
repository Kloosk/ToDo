import {ADD_THING, REMOVE_THING, SET_COUNT, SET_COUNT_BUSINESS, SET_COUNT_PERSONAL, SET_DONE} from "./ThingTypes";

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
export const removeThing = (payload) => {
  return{
      type: REMOVE_THING,
      payload
  }
};
export const setDone = (payload) => {
   return{
       type: SET_DONE,
       payload
   }
};
export const getThings = () => dispatch => {
    const objOfThings = localStorage.getItem("things");
    if (objOfThings !== null) {
        const {thingsTodo,count,countBusiness,countPersonal} = JSON.parse(objOfThings);
        dispatch(addThing(thingsTodo));
        dispatch(setCount(count));
        dispatch(setCountBusiness(countBusiness));
        dispatch(setCountPersonal(countPersonal));
    }
};
