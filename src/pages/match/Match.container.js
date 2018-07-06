import { connect } from "react-redux";
import {
  choosePlayer,
  chooseTeam,
  setScore,
  addMatch,
  closeSnackbar
} from "../../redux/entities/addMatch/AddMatch.actions";
import {
  openDialog,
  closeDialog,
  setTeam,
  addTeam,
  closeTeamSnackbar
} from "../../redux/entities/addTeam/AddTeam.actions";
import {
  selectPlayerToDisplay,
  selectTeamToDisplay,
  selectScoreToDisplay,
  selectSnackbarState
} from "../../redux/entities/addMatch/AddMatch.selectors";
import {
  selectNewTeamToDisplay,
  selectTeamSnackbarState,
  selectDialogState
} from "../../redux/entities/addTeam/AddTeam.selectors";
import { fetchTeams } from "../../redux/entities/fetchTeams/FetchTeams.actions";
import { selectTeams } from "../../redux/entities/fetchTeams/FetchTeams.selectors";
import { selectPlayers } from "../../redux/entities/fetchPlayers/FetchPlayers.selectors";
import Match from "./Match";

const mapStateToProps = state => ({
  displayPlayerOne: selectPlayerToDisplay(state, "one"),
  displayPlayerTwo: selectPlayerToDisplay(state, "two"),
  displayTeamOne: selectTeamToDisplay(state, "one"),
  displayTeamTwo: selectTeamToDisplay(state, "two"),
  displayScoreOne: selectScoreToDisplay(state, "one"),
  displayScoreTwo: selectScoreToDisplay(state, "two"),
  displaySnackbar: selectSnackbarState(state),
  displayTeam: selectNewTeamToDisplay(state),
  displayDialog: selectDialogState(state),
  displayTeamSnackbar: selectTeamSnackbarState(state),
  players: selectPlayers(state),
  teams: selectTeams(state)
});

const mapDispatchToProps = dispatch => ({
  changePlayer: (value, number) => dispatch(choosePlayer(value, number)),
  changeTeam: (value, number) => dispatch(chooseTeam(value, number)),
  changeScore: (event, number) => dispatch(setScore(event, number)),
  addingMatch: () => dispatch(addMatch()),
  closingSnackbar: () => dispatch(closeSnackbar()),
  closingTeamSnackbar: () => dispatch(closeTeamSnackbar()),
  openingDialog: () => dispatch(openDialog()),
  closingDialog: () => dispatch(closeDialog()),
  changeNewTeam: event => dispatch(setTeam(event)),
  addingTeam: () => dispatch(addTeam()),
  fetchingTeams: teams => dispatch(fetchTeams(teams))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Match);
