export const matchesActionTypes = {
  FETCH: {
    RECENT: {
      TODAY: "MATCH.FETCH.RECENT.START.TODAY",
      WEEK: "MATCH.FETCH.RECENT.START.WEEK",
      MONTH: "MATCH.FETCH.RECENT.START.MONTH"
    },
    STRIKING: "MATCH.FETCH.STRIKING",
    ERROR: "MATCH.FETCH.ERROR",
    SUCCESS: "MATCH.FETCH.SUCCESS"
  },
  DISPLAY: {
    RECENT: "SWITCH.ITEM.RECENT"
  }
};

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

export const switchItemRecent = value => ({
  type: matchesActionTypes.DISPLAY.RECENT,
  index: value
});

export default {
  errorFetchMatch,
  successFetchMatch,
  startFetchStrikingMatch,
  switchItemRecent
};
