import {applyMiddleware, createStore} from 'redux'
import {combineReducers} from 'redux';
import thingReducer from "./thing/ThingReducer";
import thunk from 'redux-thunk';
import hamMenuReducer from "./hamMenu/hamMenuReducer";

const rootReducer = combineReducers({
    things: thingReducer,
    menu: hamMenuReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store