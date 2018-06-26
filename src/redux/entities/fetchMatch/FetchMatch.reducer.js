import { fetchMatchActionTypes } from "./FetchMatch.actions";
import {
  selectDayMatches,
  selectWeekMatches,
  selectMonthMatches,
  selectHighMatches,
  selectGapMatches,
  selectLowMatches
} from "./FetchMatch.selectors";
import * as moment from "moment";

const defaultState = {
  matches: [
    {
      id: 0,
      players: [0, 1],
      teams: [0, 1],
      score: [3, 1],
      date: moment("2018-06-17T23:59:59.999+02:00")
    },
    {
      id: 1,
      players: [0, 2],
      teams: [2, 3],
      score: [3, 4],
      date: moment("2018-06-24T00:00:00.001+02:00")
    },
    {
      id: 2,
      players: [1, 2],
      teams: [4, 5],
      score: [3, 2],
      date: moment("2018-06-19T18:57:56.431+02:00")
    },
    {
      id: 3,
      players: [1, 0],
      teams: [1, 5],
      score: [3, 2],
      date: moment("2018-06-18T10:23:56.611+02:00")
    },
    {
      id: 4,
      players: [2, 0],
      teams: [2, 5],
      score: [1, 4],
      date: moment("2018-06-17T23:59:59.998+02:00")
    },
    {
      id: 5,
      players: [1, 2],
      teams: [1, 0],
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
            recentMatchesToDisplay: selectDayMatches(state),
            display: {
              ...state.display,
              recent: action.index
            }
          };
        case 1:
          return {
            ...state,
            recentMatchesToDisplay: selectWeekMatches(state),
            display: {
              ...state.display,
              recent: action.index
            }
          };
        case 2:
          return {
            ...state,
            recentMatchesToDisplay: selectMonthMatches(state),
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
