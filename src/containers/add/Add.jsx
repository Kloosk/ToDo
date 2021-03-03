import React, {useReducer} from 'react';
import {Container} from "containers/add/Add.style";
import NavAdd from "components/navAdd/NavAdd";
import CheckIcons from "components/checkIcons/CheckIcons";
import {checkIconsReducer, initialState} from "redux/add/addReducer";
import AddTodo from "components/addTodo/AddTodo";

export const CheckIconsContext = React.createContext();
const Add = () => {
    const [state,dispatch] = useReducer(checkIconsReducer,initialState);
    return (
        <CheckIconsContext.Provider value={{checkIconsState:state,checkIconsDispatch:dispatch}}>
            <Container>
                <NavAdd/>
                <CheckIcons/>
                <AddTodo/>
            </Container>
        </CheckIconsContext.Provider>
    );
};

export default Add;