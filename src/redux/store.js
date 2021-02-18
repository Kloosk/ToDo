import {createStore} from 'redux'
import {combineReducers} from 'redux';
import thingReducer from "./thing/ThingReducer";

const rootReducer = combineReducers({
    things: thingReducer
});

const store = createStore(rootReducer);

export default store