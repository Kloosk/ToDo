import store from "../redux/store";
import {setDone} from "../redux/thing/ThingActions";

export const setDoneFunc = id => {
    const {things} = store.getState();
    things.thingsTodo = things.thingsTodo.map(el => el.id === id ? {...el, done: !el.done} : el);

    localStorage.setItem("things",JSON.stringify(things));
    store.dispatch(setDone(things.thingsTodo));
};