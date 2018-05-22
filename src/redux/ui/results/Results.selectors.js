export const selectMatchToday = (state) => state.results.fetch.today[];

export const selectMatchWeek = (state) => state.results.fetch.week[];

export const selectMatchMonth = (state) => state.results.fetch.month[];

export const selectMatchHigh = (state) => state.results.fetch.high[];

export const selectMatchGap = (state) => state.results.fetch.gap[];

export const selectMatchLow = (state) => state.results.fetch.low[];

export const selectItemRecent = (state) => state.results.display.recent;

export const selectItemStriking = (state) => state.results.display.striking;
