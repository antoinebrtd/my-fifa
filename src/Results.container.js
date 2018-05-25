import { connect } from "react-redux";
import {
    startFetchMatchToday,
    startFetchMatchWeek,
    startFetchMatchMonth,
    startFetchMatchHigh,
    startFetchMatchGap,
    startFetchMatchLow,
    switchItemRecent,
    switchItemStriking
} from "./redux/ui/results/Results.actions";
import {
    selectMatchToday,
    selectMatchWeek,
    selectMatchMonth,
    selectMatchHigh,
    selectMatchGap,
    selectMatchLow,
    selectItemRecent,
    selectItemStriking
} from "./redux/ui/results/Results.selectors";
import Results from "./Results";

const mapStateToProps = state => ({
    displayToday: selectMatchToday(state),
    displayWeek: selectMatchWeek(state),
    displayMonth: selectMatchMonth(state),
    displayHigh: selectMatchHigh(state),
    displayGap: selectMatchGap(state),
    displayLow: selectMatchLow(state),
    displayItemRecent: selectItemRecent(state),
    displayItemStriking: selectItemStriking(state)
});

const mapDispatchToPros = dispatch => ({
    fetchToday: () => dispatch(startFetchMatchToday),
    fetchWeek: () => dispatch(startFetchMatchWeek),
    fetchMonth: () => dispatch(startFetchMatchMonth),
    fetchHigh: () => dispatch(startFetchMatchHigh),
    fetchGap: () => dispatch(startFetchMatchGap),
    fetchLow: () => dispatch(startFetchMatchLow),
    handleDisplayRecent: () => dispatch(switchItemRecent(value)),
    handleDisplayStriking: () => dispatch(switchItemStriking(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
