export const resultsActionTypes = {
    FETCH: {
        RECENT: {
            TODAY: 'MATCH.FETCH.RECENT.START.TODAY',
            WEEK: 'MATCH.FETCH.RECENT.START.WEEK',
            MONTH: 'MATCH.FETCH.RECENT.START.MONTH'
        },
        STRIKING: {
            HIGH: 'MATCH.FETCH.STRIKING.START.HIGH',
            GAP: 'MATCH.FETCH.STRIKING.START.GAP',
            LOW: 'MATCH.FETCH.STRIKING.START.LOW'
        },
        ERROR: 'MATCH.FETCH.ERROR',
        SUCCESS: 'MATCH.FETCH.SUCCESS'
    },
    DISPLAY: {
        RECENT: 'SWITCH.ITEM.RECENT',
        STRIKING: 'SWITCH.ITEM.STRIKING'
    }
};

export const errorFetchMatch = () => ({
    type: resultsActionTypes.FETCH.ERROR,
});

export const successFetchMatch = () => ({
    type: resultsActionTypes.FETCH.SUCCESS,
});

export const startFetchMatchToday = () => ({
    type: resultsActionTypes.FETCH.RECENT.TODAY,
});

export const startFetchMatchWeek = () => ({
    type: resultsActionTypes.FETCH.RECENT.WEEK,
});

export const startFetchMatchMonth = () => ({
    type: resultsActionTypes.FETCH.RECENT.MONTH,
});

export const startFetchMatchHigh = () => ({
    type: resultsActionTypes.FETCH.STRIKING.HIGH,
});

export const startFetchMatchGap = () => ({
    type: resultsActionTypes.FETCH.STRIKING.GAP,
});

export const startFetchMatchLow = () => ({
    type: resultsActionTypes.FETCH.STRIKING.LOW,
});

export const switchItemRecent = (value) => ({
    type: resultsActionTypes.DISPLAY.RECENT,
    index: value
});

export const switchItemStriking = (value) => ({
    type: resultsActionTypes.DISPLAY.STRIKING,
    index: value
});

export default {
    errorFetchMatch,
    successFetchMatch,
    startFetchMatchToday,
    startFetchMatchWeek,
    startFetchMatchMonth,
    startFetchMatchHigh,
    startFetchMatchGap,
    startFetchMatchLow,
    switchItemRecent,
    switchItemStriking
};
