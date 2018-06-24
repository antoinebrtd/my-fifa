import * as moment from "moment";

export const selectDayMatches = state => {
  let today = moment();
  today.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
  let dayMatches = state.matches.filter(({ date: matchDate }) =>
    matchDate.isAfter(today)
  );
  return dayMatches;
};

export const selectWeekMatches = state => {
  let today = moment({});
  today.set({ day: -6, hour: 0, minute: 0, second: 0, millisecond: 0 });
  let weekMatches = state.matches.filter(({ date: matchDate }) =>
    matchDate.isAfter(today)
  );
  return weekMatches;
};

export const selectMonthMatches = state => {
  let today = moment({});
  today.set({ date: 1, hour: 0, minute: 0, second: 0, millisecond: 0 });
  let monthMatches = state.matches.filter(({ date: matchDate }) =>
    matchDate.isAfter(today)
  );
  return monthMatches;
};

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

export const selectItemRecent = state => state.fetchMatch.display.recent;

export const selectItemStriking = state => state.fetchMatch.display.striking;

export const selectStrikingMatchesToDisplay = state =>
  state.fetchMatch.strikingMatchesToDisplay;

export const selectRecentMatchesToDisplay = state =>
  state.fetchMatch.recentMatchesToDisplay;
