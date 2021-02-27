import store from "../../redux/store";
import {setDone} from "../../redux/thing/ThingActions";
import {setDoneActivity} from "helpers/activity/setDoneActivity";

export const setDoneFunc = id => {
    const {things} = store.getState();
    things.thingsTodo = things.thingsTodo.map(el => el.id === id ? {...el, done: !el.done} : el);

    localStorage.setItem("things",JSON.stringify(things));
    store.dispatch(setDone(things.thingsTodo));

    //get day and set done activity++
    const day = new Date().getDay();
    setDoneActivity(day);
};