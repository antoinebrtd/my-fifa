export const selectHighMatches = state => {
  let highMatches = state.matches.filter(
    ({ score: [firstTeamScore, secondTeamScore] }) =>
      firstTeamScore + secondTeamScore >= 5
  );
  return highMatches;
};

export const selectGapMatches = state => {
  let gapMatches = state.matches.filter(
    ({ score: [firstTeamScore, secondTeamScore] }) =>
      Math.abs(firstTeamScore - secondTeamScore) >= 5
  );
  return gapMatches;
};

export const selectLowMatches = state => {
  let lowMatches = state.matches.filter(
    ({ score: [firstTeamScore, secondTeamScore] }) =>
      firstTeamScore + secondTeamScore <= 1
  );
  return lowMatches;
};

export const selectItemRecent = state => state.matches.display.recent;

export const selectItemStriking = state => state.matches.display.striking;

export const selectStrikingMatchesToDisplay = state =>
  state.matches.strikingMatchesToDisplay;
