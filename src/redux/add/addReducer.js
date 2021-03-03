export const initialState = {
    selectCheckIcons: true//true=business false=personal
};
export const checkIconsReducer = (state=initialState,action) => {
    switch (action.type) {
        case 'SET_CHECK_ICONS': {
            return{
                selectCheckIcons: !state.selectCheckIcons
            }
        }
        default: return state
    }
};
