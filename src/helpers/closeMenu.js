import store from "../redux/store";
import {hamMenuClose} from "../redux/hamMenu/hamMenuActions";

export const closeMenu = () => {
    const {menu} = store.getState();
    menu.hamMenu && store.dispatch(hamMenuClose());
};