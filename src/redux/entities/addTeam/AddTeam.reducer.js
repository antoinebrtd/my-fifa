import { addTeamActionTypes } from "./AddTeam.actions";

const defaultState = {
  team: "",
  display: {
    snackbar: false,
    dialog: false
  }
};

const addTeamReducer = (state = defaultState, action) => {
  switch (action.type) {
    case addTeamActionTypes.ADD.ADD_TEAM:
      return {
        ...state,
        team: "",
        display: {
          ...state.display,
          snackbar: true,
          dialog: false
        }
      };
    case addTeamActionTypes.DISPLAY.OPEN_DIALOG:
      return {
        ...state,
        display: {
          ...state.display,
          dialog: true
        }
      };
    case addTeamActionTypes.DISPLAY.CLOSE_DIALOG:
      return {
        ...state,
        team: "",
        display: {
          ...state.display,
          dialog: false
        }
      };
    case addTeamActionTypes.DISPLAY.CLOSE_TEAM_SNACKBAR:
      return {
        ...state,
        display: {
          ...state.display,
          snackbar: false
        }
      };
    case addTeamActionTypes.SET.TEAM:
      return {
        ...state,
        team: action.team
      };
    default:
      return state;
  }
};

export default addTeamReducer;
