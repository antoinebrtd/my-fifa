export const matchesActionTypes = {
  FETCH: {
    RECENT: "MATCH.FETCH.RECENT",
    STRIKING: "MATCH.FETCH.STRIKING",
    ERROR: "MATCH.FETCH.ERROR",
    SUCCESS: "MATCH.FETCH.SUCCESS"
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

export default {
  errorFetchMatch,
  successFetchMatch,
  startFetchRecentMatch,
  startFetchStrikingMatch
};
