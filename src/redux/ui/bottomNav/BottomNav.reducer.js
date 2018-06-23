import { bottomNavActionTypes } from "./BottomNav.actions";

const defaultState = {
  selected: null
};

const bottomNavReducer = (state = defaultState, action) => {
  switch (action.type) {
    case bottomNavActionTypes.DISPLAY.TICKET:
      return {
        ...state,
        selected: 0
      };
    case bottomNavActionTypes.DISPLAY.LANGUAGE:
      return {
        ...state,
        selected: 1
      };
    case bottomNavActionTypes.DISPLAY.CONTACT:
      return {
        ...state,
        selected: 2
      };
    default:
      return state;
  }
};

export default bottomNavReducer;
