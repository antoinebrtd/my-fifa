import { fetchMatchActionTypes } from "./FetchMatch.actions";

const defaultState = {
  display: {
    recent: 0,
    striking: 0
  },
  recentMatchesToDisplay: [],
  strikingMatchesToDisplay: []
};

const fetchMatchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case fetchMatchActionTypes.FETCH.STRIKING:
      switch (action.index) {
        case 0:
          return {
            ...state,
            strikingMatchesToDisplay: action.matches,
            display: {
              ...state.display,
              striking: action.index
            }
          };
        case 1:
          return {
            ...state,
            strikingMatchesToDisplay: action.matches,
            display: {
              ...state.display,
              striking: action.index
            }
          };
        case 2:
          return {
            ...state,
            strikingMatchesToDisplay: action.matches,
            display: {
              ...state.display,
              striking: action.index
            }
          };
        default:
          return state;
      }
    case fetchMatchActionTypes.FETCH.RECENT:
      switch (action.index) {
        case 0:
          return {
            ...state,
            recentMatchesToDisplay: action.matches,
            display: {
              ...state.display,
              recent: action.index
            }
          };
        case 1:
          return {
            ...state,
            recentMatchesToDisplay: action.matches,
            display: {
              ...state.display,
              recent: action.index
            }
          };
        case 2:
          return {
            ...state,
            recentMatchesToDisplay: action.matches,
            display: {
              ...state.display,
              recent: action.index
            }
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default fetchMatchReducer;
