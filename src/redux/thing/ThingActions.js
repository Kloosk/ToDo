import {CLEAR_ALL, SET_ALL_OBJ, SET_DONE} from "./ThingTypes";

export const setDone = (payload) => {
   return{
       type: SET_DONE,
       payload
   }
};
export const clearAll = () => {
  return{
      type: CLEAR_ALL
  }
};
export const setAllObj = (payload) => {
    return {
        type: SET_ALL_OBJ,
        payload
    }
};
export const getThings = () => dispatch => {
    const objOfThings = localStorage.getItem("things");
    if (objOfThings !== null) {
        const {thingsTodo,count,countBusiness,countPersonal} = JSON.parse(objOfThings);
        dispatch(setAllObj({
            thingsTodo,
            count,
            countBusiness,
            countPersonal
        }));
    }
};
