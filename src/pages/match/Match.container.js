import { connect } from "react-redux";
import {
  choosePlayer,
  chooseTeam,
  setScore,
  addMatch,
  closeSnackbar
} from "../../redux/entities/addMatch/AddMatch.actions";
import {
  selectPlayerToDisplay,
  selectTeamToDisplay,
  selectScoreToDisplay,
  selectSnackbarState
} from "../../redux/entities/addMatch/AddMatch.selectors";
import Match from "./Match";

const mapStateToProps = state => ({
  displayPlayerOne: selectPlayerToDisplay(state, "one"),
  displayPlayerTwo: selectPlayerToDisplay(state, "two"),
  displayTeamOne: selectTeamToDisplay(state, "one"),
  displayTeamTwo: selectTeamToDisplay(state, "two"),
  displayScoreOne: selectScoreToDisplay(state, "one"),
  displayScoreTwo: selectScoreToDisplay(state, "two"),
  displaySnackbar: selectSnackbarState(state)
});

const mapDispatchToProps = dispatch => ({
  changePlayer: (value, number) => dispatch(choosePlayer(value, number)),
  changeTeam: (value, number) => dispatch(chooseTeam(value, number)),
  changeScore: (event, number) => dispatch(setScore(event, number)),
  addingMatch: () => dispatch(addMatch()),
  closingSnackbar: () => dispatch(closeSnackbar())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Match);
