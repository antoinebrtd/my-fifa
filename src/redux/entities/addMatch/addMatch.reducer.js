import { addMatchActionTypes } from "./addMatch.actions";
import {
  selectPlayerOneToPost,
  selectPlayerTwoToPost,
  selectTeamOneToPost,
  selectTeamTwoToPost,
  selectScoreOneToPost,
  selectScoreTwoToPost
} from "./addMatch.selectors";

const defaultState = {
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

const addMatchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case addMatchActionTypes.SELECT.PLAYER_ONE:
      return {
        ...state,
        match: {
          ...state.match,
          player_one: action.player_one
        }
      };
    case addMatchActionTypes.SELECT.PLAYER_TWO:
      return {
        ...state,
        match: {
          ...state.match,
          player_two: action.player_two
        }
      };
    case addMatchActionTypes.SELECT.TEAM_ONE:
      return {
        ...state,
        match: {
          ...state.match,
          team_one: action.team_one
        }
      };
    case addMatchActionTypes.SELECT.TEAM_TWO:
      return {
        ...state,
        match: {
          ...state.match,
          team_two: action.team_two
        }
      };
    case addMatchActionTypes.SET.SCORE_ONE:
      return {
        ...state,
        match: {
          ...state.match,
          score_one: action.score_one
        }
      };
    case addMatchActionTypes.SET.SCORE_TWO:
      return {
        ...state,
        match: {
          ...state.match,
          score_two: action.score_two
        }
      };
    case addMatchActionTypes.ADD.ADD_MATCH:
      fetch("http://127.0.0.1:8000/add/match", {
        method: "POST",
        body: JSON.stringify({
          players: [selectPlayerOneToPost(state), selectPlayerTwoToPost(state)],
          teams: [selectTeamOneToPost(state), selectTeamTwoToPost(state)],
          score: [
            Number(selectScoreOneToPost(state)),
            Number(selectScoreTwoToPost(state))
          ],
          date: action.date
        })
      })
        .then(function(body) {
          console.log("Request success: ", body);
        })
        .catch(function(error) {
          console.log("Request failure: ", error);
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

export default addMatchReducer;
