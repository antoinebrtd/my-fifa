import { playersActionTypes } from "./Players.actions";

const defaultState = {
    display: 0,
};

const playersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case playersActionTypes.TABS.DISPLAY_ZERO:
            return {
                ...state,
                display: 0,
            };
        case playersActionTypes.TABS.DISPLAY_ONE:
            return {
                ...state,
                display: 1,
            };
        case playersActionTypes.TABS.DISPLAY_TWO:
            return {
                ...state,
                display: 2,
            };
        default:
            return (state);
    }
};

export default playersReducer;
