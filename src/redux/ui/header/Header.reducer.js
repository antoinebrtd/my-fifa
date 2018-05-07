import { headerActionTypes } from "./Header.actions";

const defaultState = {
    isOpen: false,
};

const headerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case headerActionTypes.DRAWER.OPEN:
            return {
                ...state,
                isOpen: true,
            };
        case headerActionTypes.DRAWER.CLOSE:
            return {
                ...state,
                isOpen: false,
            };
        default:
            return (state);
    }
};

export default headerReducer;
