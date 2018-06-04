export const matchesActionTypes = {
  FETCH: {
    RECENT: {
      TODAY: "MATCH.FETCH.RECENT.START.TODAY",
      WEEK: "MATCH.FETCH.RECENT.START.WEEK",
      MONTH: "MATCH.FETCH.RECENT.START.MONTH"
    },
    STRIKING: {
      HIGH: "MATCH.FETCH.STRIKING.START.HIGH",
      GAP: "MATCH.FETCH.STRIKING.START.GAP",
      LOW: "MATCH.FETCH.STRIKING.START.LOW"
    },
    ERROR: "MATCH.FETCH.ERROR",
    SUCCESS: "MATCH.FETCH.SUCCESS"
  },
  DISPLAY: {
    RECENT: "SWITCH.ITEM.RECENT"
  }
};

export const startFetchMatchHigh = value => ({
  type: matchesActionTypes.FETCH.STRIKING.HIGH,
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
  startFetchMatchHigh,
  switchItemRecent
};
