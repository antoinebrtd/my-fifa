import { connect } from "react-redux";
import {
  startFetchMatchHigh,
  switchItemRecent
} from "./redux/entities/matches/Matches.actions";
import {
  selectStrikingMatchesToDisplay,
  selectItemRecent,
  selectItemStriking
} from "./redux/entities/matches/Matches.selectors";
import Results from "./Results";

const mapStateToProps = state => ({
  displayStriking: selectStrikingMatchesToDisplay(state),
  displayItemRecent: selectItemRecent(state),
  displayItemStriking: selectItemStriking(state)
});

const mapDispatchToProps = dispatch => ({
  handleDisplayRecent: value => dispatch(switchItemRecent(value)),
  fetchStriking: value => dispatch(startFetchMatchHigh(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
