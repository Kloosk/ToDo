import React, {useReducer} from 'react';
import {Container} from "containers/add/Add.style";
import NavAdd from "components/navAdd/NavAdd";
import Form from "components/form/Form";
import CheckIcons from "components/checkIcons/CheckIcons";

export const CheckIconsContext = React.createContext();
const initialState = {
  selectCheckIcons: true//true=business false=personal
};
const checkIconsReducer = (state=initialState,action) => {
  switch (action.type) {
      case 'SET_CHECK_ICONS': {
          return{
              selectCheckIcons: !state.selectCheckIcons
          }
      }
      default: return state
  }
};

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