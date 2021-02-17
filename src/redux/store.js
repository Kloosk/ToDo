import {createStore,applyMiddleware} from 'redux'
import ReduxThunk from "redux-thunk";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({

});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export default store