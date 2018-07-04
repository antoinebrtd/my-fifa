export const selectPlayerToDisplay = (state, number) => {
  switch (number) {
    case "one":
      return state.addMatch.match.player_one;
    case "two":
      return state.addMatch.match.player_two;
    default:
      return null;
  }
};

export const selectTeamToDisplay = (state, number) => {
  switch (number) {
    case "one":
      return state.addMatch.match.team_one;
    case "two":
      return state.addMatch.match.team_two;
    default:
      return null;
  }
};

export const selectScoreToDisplay = (state, number) => {
  switch (number) {
    case "one":
      return state.addMatch.match.score_one;
    case "two":
      return state.addMatch.match.score_two;
    default:
      return null;
  }
};

export const selectSnackbarState = state => state.addMatch.display.snackbar;
