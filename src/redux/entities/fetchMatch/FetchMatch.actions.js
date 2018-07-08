export const fetchMatchActionTypes = {
  FETCH: {
    RECENT: "MATCH.FETCH.RECENT",
    STRIKING: "MATCH.FETCH.STRIKING",
    ERROR: "MATCH.FETCH.ERROR",
    SUCCESS: "MATCH.FETCH.SUCCESS"
  }
};

export const startFetchRecentMatch = (value, matches) => ({
  type: fetchMatchActionTypes.FETCH.RECENT,
  index: value,
  matches: matches
});

export const startFetchStrikingMatch = value => ({
  type: fetchMatchActionTypes.FETCH.STRIKING,
  index: value
});

export const errorFetchMatch = () => ({
  type: fetchMatchActionTypes.FETCH.ERROR
});

export const successFetchMatch = () => ({
  type: fetchMatchActionTypes.FETCH.SUCCESS
});

export default {
  errorFetchMatch,
  successFetchMatch,
  startFetchRecentMatch,
  startFetchStrikingMatch
};
