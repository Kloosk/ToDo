import {MENU_CLOSE, MENU_TOGGLE} from "./hamMenuTypes";

const initialState = {
    hamMenu: false //false=menu is closed
};

const hamMenuReducer = (state=initialState,action) => {
    switch(action.type){
        case MENU_CLOSE:{
            console.log("menuclose",state.hamMenu);
            return{
                hamMenu: false
            }
        }
        case MENU_TOGGLE:{
            console.log("menutoggle",state.hamMenu);
            return{
                hamMenu: true
            }
        }
        default: return state
    }
};
export default hamMenuReducer;