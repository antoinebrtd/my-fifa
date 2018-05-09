import { playersActionTypes } from "./Players.actions";

const defaultState = {
    display: 0,
};

const playersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case playersActionTypes.TABS.SWITCH:
            return {
                ...state,
                display: action.index,
            };
        default:
            return (state);
    }
};

export default playersReducer;
