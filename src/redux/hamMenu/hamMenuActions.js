import {MENU_TOGGLE,MENU_CLOSE} from "./hamMenuTypes";

export const hamMenuToggle = () => {
  return{
      type: MENU_TOGGLE,
  }
};
export const hamMenuClose = () => {
    return{
        type: MENU_CLOSE,
    }
};