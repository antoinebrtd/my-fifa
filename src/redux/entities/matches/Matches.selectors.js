export const selectHighMatches = state => {
  let highMatches = [];
  state.matches.map(match => {
    if (match.score[0] + match.score[1] >= 5) {
      highMatches.push(match);
    }
  });
  return highMatches;
};

export const selectItemRecent = state => state.matches.display.recent;

export const selectItemStriking = state => state.matches.display.striking;

export const selectStrikingMatchesToDisplay = state =>
  state.matches.strikingMatchesToDisplay;
