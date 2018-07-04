import { connect } from "react-redux";
import { fetchPlayers } from "../../redux/entities/fetchPlayers/FetchPlayers.actions";
import { selectPlayers } from "../../redux/entities/fetchPlayers/FetchPlayers.selectors";
import { fetchTeams } from "../../redux/entities/fetchTeams/FetchTeams.actions";
import { selectTeams } from "../../redux/entities/fetchTeams/FetchTeams.selectors";
import Home from "./Home";

const mapStateToProps = state => ({
  players: selectPlayers(state),
  teams: selectTeams(state)
});

const mapDispatchToProps = dispatch => ({
  fetchingPlayers: players => dispatch(fetchPlayers(players)),
  fetchingTeams: teams => dispatch(fetchTeams(teams))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
