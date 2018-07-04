import { addMatchActionTypes } from "./AddMatch.actions";

const defaultState = {
  match: {
    player_one: null,
    player_two: null,
    team_one: null,
    team_two: null,
    score_one: "",
    score_two: "",
    date: null
  },
  display: {
    snackbar: false
  }
};

const addMatchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case addMatchActionTypes.SELECT.PLAYER:
      switch (action.number) {
        case "one":
          return {
            ...state,
            match: {
              ...state.match,
              player_one: action.player
            }
          };
        case "two":
          return {
            ...state,
            match: {
              ...state.match,
              player_two: action.player
            }
          };
        default:
          return state;
      }
    case addMatchActionTypes.SELECT.TEAM:
      switch (action.number) {
        case "one":
          return {
            ...state,
            match: {
              ...state.match,
              team_one: action.team
            }
          };
        case "two":
          return {
            ...state,
            match: {
              ...state.match,
              team_two: action.team
            }
          };
        default:
          return state;
      }
    case addMatchActionTypes.SET.SCORE:
      switch (action.number) {
        case "one":
          return {
            ...state,
            match: {
              ...state.match,
              score_one: action.score
            }
          };
        case "two":
          return {
            ...state,
            match: {
              ...state.match,
              score_two: action.score
            }
          };
        default:
          return state;
      }
    case addMatchActionTypes.ADD.ADD_MATCH:
      return {
        ...state,
        match: {
          ...state.match,
          player_one: null,
          player_two: null,
          team_one: null,
          team_two: null,
          score_one: "",
          score_two: "",
          date: null
        },
        display: {
          ...state.display,
          snackbar: true
        }
      };
    case addMatchActionTypes.DISPLAY.CLOSE_SNACKBAR:
      return {
        ...state,
        display: {
          ...state.display,
          snackbar: false
        }
      };
    default:
      return state;
  }
};

export default addMatchReducer;
