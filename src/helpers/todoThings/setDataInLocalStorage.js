import {v4 as uuidv4} from 'uuid';
import {setGeneralActivity} from "helpers/activity/setGeneralActivity";

export const setDataInLocalStorage = (newData) => {
    newData['id'] = uuidv4();
    newData['done'] = false;
    const things = localStorage.getItem("things");
    let dataOfThings = {
        empty: false,
        thingsTodo: [],
        count: 1,
        countPersonal: 0,
        countBusiness: 0
    };

    if (things !== null) {//exists
        dataOfThings = JSON.parse(things);
        dataOfThings.thingsTodo.push(newData);
        dataOfThings.count+=1;

        if(newData.type === "business"){
            dataOfThings.countBusiness+=1;
        }else dataOfThings.countPersonal+=1;

        localStorage.setItem("things", JSON.stringify(dataOfThings));
    }else{
        dataOfThings.thingsTodo.push(newData);

        if(newData.type === "business"){
            dataOfThings.countBusiness+=1;
        }else dataOfThings.countPersonal+=1;

        localStorage.setItem("things", JSON.stringify(dataOfThings));
    }

    //get day and set activity++
    const day = new Date().getDay();
    setGeneralActivity(day);
};

