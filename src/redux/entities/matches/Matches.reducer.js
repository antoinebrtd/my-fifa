import { matchesActionTypes } from "./Matches.actions";
import {
  selectDayMatches,
  selectWeekMatches,
  selectMonthMatches,
  selectHighMatches,
  selectGapMatches,
  selectLowMatches,
  selectPlayerOneToPost,
  selectPlayerTwoToPost,
  selectTeamOneToPost,
  selectTeamTwoToPost,
  selectScoreOneToPost,
  selectScoreTwoToPost
} from "./Matches.selectors";
import * as moment from "moment";

const defaultState = {
  matches: [
    {
      id: 0,
      players: [0, 1],
      teams: [0, 1],
      score: [3, 1],
      date: moment("2018-06-20T18:23:56.611+02:00")
    },
    {
      id: 1,
      players: [0, 2],
      teams: [2, 3],
      score: [3, 4],
      date: moment("2018-06-20T20:31:32.897+02:00")
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
  strikingMatchesToDisplay: [],
  match: {
    player_one: null,
    player_two: null,
    team_one: null,
    team_two: null,
    score_one: null,
    score_two: null,
    date: null
  }
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
    case matchesActionTypes.SELECT.PLAYER_ONE:
      return {
        ...state,
        match: {
          ...state.match,
          player_one: action.player_one
        }
      };
    case matchesActionTypes.SELECT.PLAYER_TWO:
      return {
        ...state,
        match: {
          ...state.match,
          player_two: action.player_two
        }
      };
    case matchesActionTypes.SELECT.TEAM_ONE:
      return {
        ...state,
        match: {
          ...state.match,
          team_one: action.team_one
        }
      };
    case matchesActionTypes.SELECT.TEAM_TWO:
      return {
        ...state,
        match: {
          ...state.match,
          team_two: action.team_two
        }
      };
    case matchesActionTypes.SET.SCORE_ONE:
      return {
        ...state,
        match: {
          ...state.match,
          score_one: action.score_one
        }
      };
    case matchesActionTypes.SET.SCORE_TWO:
      return {
        ...state,
        match: {
          ...state.match,
          score_two: action.score_two
        }
      };
    case matchesActionTypes.ADD.ADD_MATCH:
      console.log(action.date);
      fetch("http://reqres.in/api/users", {
        method: "POST",
        data: {
          players: [selectPlayerOneToPost(state), selectPlayerTwoToPost(state)],
          teams: [selectTeamOneToPost(state), selectTeamTwoToPost(state)],
          score: [selectScoreOneToPost(state), selectScoreTwoToPost(state)],
          date: action.date
        }
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(body) {
          console.log(body);
        });
      return {
        ...state,
        match: {
          ...state.match,
          player_one: null,
          player_two: null,
          team_one: null,
          team_two: null,
          score_one: null,
          score_two: null,
          date: null
        }
      };
    default:
      return state;
  }
};

export default matchesReducer;
