import { connect } from "react-redux";
import {
  startFetchStrikingMatch,
  startFetchRecentMatch
} from "../../redux/entities/fetchMatch/FetchMatch.actions";
import {
  selectRecentMatchesToDisplay,
  selectStrikingMatchesToDisplay,
  selectItemRecent,
  selectItemStriking
} from "../../redux/entities/fetchMatch/FetchMatch.selectors";
import Results from "./Results";

const mapStateToProps = state => ({
  displayRecent: selectRecentMatchesToDisplay(state),
  displayStriking: selectStrikingMatchesToDisplay(state),
  displayItemRecent: selectItemRecent(state),
  displayItemStriking: selectItemStriking(state)
});

const mapDispatchToProps = dispatch => ({
  fetchRecent: (value, matches) =>
    dispatch(startFetchRecentMatch(value, matches)),
  fetchStriking: value => dispatch(startFetchStrikingMatch(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
