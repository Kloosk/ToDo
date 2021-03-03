import React, {useReducer} from 'react';
import {Container} from "containers/add/Add.style";
import NavAdd from "components/navAdd/NavAdd";
import Form from "components/form/Form";
import CheckIcons from "components/checkIcons/CheckIcons";
import {checkIconsReducer, initialState} from "redux/add/addReducer";

export const CheckIconsContext = React.createContext();
const Add = () => {
    const [state,dispatch] = useReducer(checkIconsReducer,initialState);
    return (
        <CheckIconsContext.Provider value={{checkIconsState:state,checkIconsDispatch:dispatch}}>
            <Container>
                <NavAdd/>
                <CheckIcons/>
                <Form/>
            </Container>
        </CheckIconsContext.Provider>
    );
};

export default Add;