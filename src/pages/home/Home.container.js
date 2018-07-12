import { connect } from "react-redux";
import { fetchPlayers } from "../../redux/entities/fetchPlayers/FetchPlayers.actions";
import { selectPlayers } from "../../redux/entities/fetchPlayers/FetchPlayers.selectors";
import { fetchTeams } from "../../redux/entities/fetchTeams/FetchTeams.actions";
import { selectTeams } from "../../redux/entities/fetchTeams/FetchTeams.selectors";
import { startFetchRecentMatch } from "../../redux/entities/fetchMatch/FetchMatch.actions";
import { selectRecentMatchesToDisplay } from "../../redux/entities/fetchMatch/FetchMatch.selectors";
import Home from "./Home";

const mapStateToProps = state => ({
  players: selectPlayers(state),
  teams: selectTeams(state),
  displayRecent: selectRecentMatchesToDisplay(state)
});

const mapDispatchToProps = dispatch => ({
  fetchingPlayers: players => dispatch(fetchPlayers(players)),
  fetchingTeams: teams => dispatch(fetchTeams(teams)),
  fetchRecent: (value, matches) =>
    dispatch(startFetchRecentMatch(value, matches))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
