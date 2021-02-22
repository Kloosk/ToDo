import store from "../../redux/store";
import {clearAll} from "../../redux/thing/ThingActions";

export const removeAllThings = () => {
  store.dispatch(clearAll());
  localStorage.clear();
};