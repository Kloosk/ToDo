import {applyMiddleware, combineReducers, createStore} from 'redux'
import thingReducer from "./thing/ThingReducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    things: thingReducer,
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store