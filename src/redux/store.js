import {applyMiddleware, combineReducers, createStore} from 'redux'
import thingReducer from "redux/thing/thingReducer";
import thunk from 'redux-thunk';
import activityChartReducer from "redux/activityChart/activityChartReducer";

const rootReducer = combineReducers({
    things: thingReducer,
    activityChartData: activityChartReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store