export const addMatchActionTypes = {
  SELECT: {
    PLAYER: "SELECT.PLAYER",
    TEAM: "SELECT.TEAM"
  },
  SET: {
    SCORE: "SET.SCORE"
  },
  ADD: {
    ADD_MATCH: "ADD.MATCH"
  },
  DISPLAY: {
    CLOSE_SNACKBAR: "CLOSE.SNACKBAR"
  }
};

export const choosePlayer = (value, index) => ({
  type: addMatchActionTypes.SELECT.PLAYER,
  player: value,
  number: index
});

export const chooseTeam = (value, index) => ({
  type: addMatchActionTypes.SELECT.TEAM,
  team: value,
  number: index
});

export const setScore = (event, index) => ({
  type: addMatchActionTypes.SET.SCORE,
  score: event.target.value,
  number: index
});

export const addMatch = (score_one, score_two) => ({
  type: addMatchActionTypes.ADD.ADD_MATCH
});

export const closeSnackbar = () => ({
  type: addMatchActionTypes.DISPLAY.CLOSE_SNACKBAR
});

export default {
  choosePlayer,
  chooseTeam,
  setScore,
  addMatch,
  closeSnackbar
};
