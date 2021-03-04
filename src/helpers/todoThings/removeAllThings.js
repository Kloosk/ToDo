import store from "../../redux/store";
import {clearAll} from "redux/thing/thingActions";

export const removeAllThings = () => {
  store.dispatch(clearAll());
  localStorage.clear();
};