import { matchesActionTypes } from "./Matches.actions";
import {
  selectDayMatches,
  selectHighMatches,
  selectGapMatches,
  selectLowMatches
} from "./Matches.selectors";

const defaultState = {
  matches: [
    {
      id: 0,
      players: [0, 1],
      teams: [0, 1],
      score: [3, 1],
      date: "2018-06-06T18:23:56.611Z"
    },
    {
      id: 1,
      players: [0, 2],
      teams: [2, 3],
      score: [3, 4],
      date: "2018-02-27T16:31:32.897Z"
    },
    {
      id: 2,
      players: [1, 2],
      teams: [4, 5],
      score: [3, 2],
      date: "2018-02-28T18:57:56.431Z"
    },
    {
      id: 3,
      players: [1, 0],
      teams: [1, 5],
      score: [3, 2],
      date: "2018-03-02T10:23:56.611Z"
    },
    {
      id: 4,
      players: [2, 0],
      teams: [2, 5],
      score: [1, 4],
      date: "2018-03-02T10:34:27.981Z"
    },
    {
      id: 5,
      players: [1, 2],
      teams: [1, 0],
      score: [1, 0],
      date: "2018-03-02T18:03:09.007Z"
    }
  ],
  display: {
    recent: 0,
    striking: 0
  },
  recentMatchesToDisplay: [],
  strikingMatchesToDisplay: []
};

const matchesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case matchesActionTypes.FETCH.STRIKING:
      switch (action.index) {
        case 0:
          return {
            ...state,
            strikingMatchesToDisplay: selectHighMatches(state),
            display: {
              ...state.display,
              striking: action.index
            }
          };
        case 1:
          return {
            ...state,
            strikingMatchesToDisplay: selectGapMatches(state),
            display: {
              ...state.display,
              striking: action.index
            }
          };
        case 2:
          return {
            ...state,
            strikingMatchesToDisplay: selectLowMatches(state),
            display: {
              ...state.display,
              striking: action.index
            }
          };
        default:
          return state;
      }
    case matchesActionTypes.FETCH.RECENT:
      switch (action.index) {
        case 0:
          return {
            ...state,
            recentMatchesToDisplay: selectDayMatches(state),
            display: {
              ...state.display,
              recent: action.index
            }
          };
        case 1:
          return {
            ...state,
            recentMatchesToDisplay: selectDayMatches(state),
            display: {
              ...state.display,
              recent: action.index
            }
          };
        case 2:
          return {
            ...state,
            recentMatchesToDisplay: selectDayMatches(state),
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

export default matchesReducer;
