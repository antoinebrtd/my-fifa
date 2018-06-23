import * as moment from "moment";

export const matchesActionTypes = {
  FETCH: {
    RECENT: "MATCH.FETCH.RECENT",
    STRIKING: "MATCH.FETCH.STRIKING",
    ERROR: "MATCH.FETCH.ERROR",
    SUCCESS: "MATCH.FETCH.SUCCESS"
  },
  SELECT: {
    PLAYER_ONE: "SELECT.PLAYER_ONE",
    PLAYER_TWO: "SELECT.PLAYER_TWO",
    TEAM_ONE: "SELECT.TEAM_ONE",
    TEAM_TWO: "SELECT.TEAM_TWO"
  },
  SET: {
    SCORE_ONE: "SET.SCORE_ONE",
    SCORE_TWO: "SET.SCORE_TWO"
  },
  ADD: {
    ADD_MATCH: "ADD.MATCH"
  }
};

export const startFetchRecentMatch = value => ({
  type: matchesActionTypes.FETCH.RECENT,
  index: value
});

export const startFetchStrikingMatch = value => ({
  type: matchesActionTypes.FETCH.STRIKING,
  index: value
});

export const errorFetchMatch = () => ({
  type: matchesActionTypes.FETCH.ERROR
});

export const successFetchMatch = () => ({
  type: matchesActionTypes.FETCH.SUCCESS
});

export const choosePlayerOne = value => ({
  type: matchesActionTypes.SELECT.PLAYER_ONE,
  player_one: value
});

export const choosePlayerTwo = value => ({
  type: matchesActionTypes.SELECT.PLAYER_TWO,
  player_two: value
});

export const chooseTeamOne = value => ({
  type: matchesActionTypes.SELECT.TEAM_ONE,
  team_one: value
});

export const chooseTeamTwo = value => ({
  type: matchesActionTypes.SELECT.TEAM_TWO,
  team_two: value
});

export const setScoreOne = value => ({
  type: matchesActionTypes.SET.SCORE_ONE,
  score_one: value
});

export const setScoreTwo = value => ({
  type: matchesActionTypes.SET.SCORE_TWO,
  score_two: value
});

export const addMatch = (score_one, score_two) => ({
  type: matchesActionTypes.ADD.ADD_MATCH,
  date: moment()
});

export default {
  errorFetchMatch,
  successFetchMatch,
  startFetchRecentMatch,
  startFetchStrikingMatch,
  choosePlayerOne,
  choosePlayerTwo,
  chooseTeamOne,
  chooseTeamTwo,
  addMatch
};
