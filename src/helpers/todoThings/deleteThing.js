import {setAllObj} from "../../redux/thing/ThingActions";
import store from "../../redux/store";

export const deleteThings = (id,type) => {
    const {things} = store.getState();
    //remove element in array
    things.thingsTodo = things.thingsTodo.filter(el => el.id !== id);
    things.count--;
    type === "business" ? things.countBusiness-- : things.countPersonal--;

    if(!things.count){ //things.count === 0
        things.empty = true
    }

    localStorage.setItem("things",JSON.stringify(things));
    store.dispatch(setAllObj(things));
};