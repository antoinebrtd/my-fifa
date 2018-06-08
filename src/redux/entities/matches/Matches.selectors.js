export const selectDayMatches = state => {
  let today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.toISOString();
  let dayMatches = state.matches.filter(
    ({ date: matchDate }) => matchDate >= today
  );
  return dayMatches;
};

/*export const selectWeekMatches = state => {
  let today = new Date.toISOString();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  let weekMatches = state.matches.filter(
    ({ date: matchDate }) => matchDate >= today
  );
  return weekMatches;
};

export const selectMonthMatches = state => {
  let today = new Date.toISOString();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  let monthMatches = state.matches.filter(
    ({ date: matchDate }) => matchDate >= today
  );
  return monthMatches;
};*/

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

export const selectRecentMatchesToDisplay = state =>
  state.matches.recentMatchesToDisplay;
