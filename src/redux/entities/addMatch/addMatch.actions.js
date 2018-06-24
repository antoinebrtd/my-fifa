import * as moment from "moment";

export const addMatchActionTypes = {
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

export const choosePlayerOne = value => ({
  type: addMatchActionTypes.SELECT.PLAYER_ONE,
  player_one: value
});

export const choosePlayerTwo = value => ({
  type: addMatchActionTypes.SELECT.PLAYER_TWO,
  player_two: value
});

export const chooseTeamOne = value => ({
  type: addMatchActionTypes.SELECT.TEAM_ONE,
  team_one: value
});

export const chooseTeamTwo = value => ({
  type: addMatchActionTypes.SELECT.TEAM_TWO,
  team_two: value
});

export const setScoreOne = value => ({
  type: addMatchActionTypes.SET.SCORE_ONE,
  score_one: value
});

export const setScoreTwo = value => ({
  type: addMatchActionTypes.SET.SCORE_TWO,
  score_two: value
});

export const addMatch = (score_one, score_two) => ({
  type: addMatchActionTypes.ADD.ADD_MATCH,
  date: moment().format()
});

export default {
  choosePlayerOne,
  choosePlayerTwo,
  chooseTeamOne,
  chooseTeamTwo,
  setScoreOne,
  setScoreTwo,
  addMatch
};
