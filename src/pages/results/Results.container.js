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
import { selectTeams } from "../../redux/entities/fetchTeams/FetchTeams.selectors";
import { selectPlayers } from "../../redux/entities/fetchPlayers/FetchPlayers.selectors";
import Results from "./Results";

const mapStateToProps = state => ({
  displayRecent: selectRecentMatchesToDisplay(state),
  displayStriking: selectStrikingMatchesToDisplay(state),
  displayItemRecent: selectItemRecent(state),
  displayItemStriking: selectItemStriking(state),
  players: selectPlayers(state),
  teams: selectTeams(state)
});

const mapDispatchToProps = dispatch => ({
  fetchRecent: (value, matches) =>
    dispatch(startFetchRecentMatch(value, matches)),
  fetchStriking: (value, matches) =>
    dispatch(startFetchStrikingMatch(value, matches))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
