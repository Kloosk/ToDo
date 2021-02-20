import {MENU_CLOSE, MENU_TOGGLE} from "./hamMenuTypes";

const initialState = {
    hamMenu: false //false=menu is closed
};

const hamMenuReducer = (state=initialState,action) => {
    switch(action.type){
        case MENU_CLOSE:{
            return{
                hamMenu: false
            }
        }
        case MENU_TOGGLE:{
            return{
                hamMenu: !state.hamMenu
            }
        }
        default: return state
    }
};
export default hamMenuReducer;