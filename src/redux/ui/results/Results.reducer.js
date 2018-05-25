import { resultsActionTypes } from "./Results.actions";

const defaultState = {
    fetch: {
        today: {},
        week: {},
        month: {},
        high: {},
        gap: {},
        low: {}
    },
    display: {
        recent: 0,
        striking: 0
    }
};

const resultsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case resultsActionTypes.FETCH.RECENT.TODAY:
            return {
                ...state,
                today: {
                    ...state.fetch.today,

                }
            };
        case resultsActionTypes.FETCH.RECENT.WEEK:
            return {
                ...state,
                week: {
                    ...state.fetch.week,

                }
            };
        case resultsActionTypes.FETCH.RECENT.MONTH:
            return {
                ...state,
                month: {
                    ...state.fetch.month,

                }
            };
        case resultsActionTypes.FETCH.STRIKING.HIGH:
            return {
                ...state,
                high: {
                    ...state.fetch.high,

                }
            };
        case resultsActionTypes.FETCH.STRIKING.GAP:
            return {
                ...state,
                gap: {
                    ...state.fetch.gap,

                }
            };
        case resultsActionTypes.FETCH.STRIKING.LOW:
            return {
                ...state,
                low: {
                    ...state.fetch.low,

                }
            };
        case resultsActionTypes.DISPLAY.RECENT:
            return {
                ...state,
                display: {
                    ...state.display,
                    recent: action.index
                }
            };
        case resultsActionTypes.DISPLAY.STRIKING:
            return {
                ...state,
                display: {
                    ...state.display,
                    striking: action.index
                }
            };
        default:
            return (state);
    }
};

export default resultsReducer;
