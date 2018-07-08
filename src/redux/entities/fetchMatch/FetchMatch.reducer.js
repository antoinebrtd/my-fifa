import { fetchMatchActionTypes } from "./FetchMatch.actions";
import {
  selectHighMatches,
  selectGapMatches,
  selectLowMatches
} from "./FetchMatch.selectors";
import * as moment from "moment";

const defaultState = {
  matches: [
    {
      id: 1,
      players: [1, 2],
      teams: [1, 2],
      score: [3, 1],
      date: moment("2018-06-17T23:59:59.999+02:00")
    },
    {
      id: 2,
      players: [1, 3],
      teams: [3, 4],
      score: [3, 4],
      date: moment("2018-06-24T00:00:00.001+02:00")
    },
    {
      id: 3,
      players: [2, 3],
      teams: [5, 6],
      score: [3, 2],
      date: moment("2018-06-19T18:57:56.431+02:00")
    },
    {
      id: 4,
      players: [2, 1],
      teams: [2, 6],
      score: [3, 2],
      date: moment("2018-06-18T10:23:56.611+02:00")
    },
    {
      id: 5,
      players: [3, 1],
      teams: [3, 6],
      score: [1, 4],
      date: moment("2018-06-17T23:59:59.998+02:00")
    },
    {
      id: 6,
      players: [2, 3],
      teams: [2, 1],
      score: [1, 0],
      date: moment("2018-03-02T18:03:09.007+02:00")
    }
  ],
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
