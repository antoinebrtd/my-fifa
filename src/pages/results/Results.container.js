import { connect } from "react-redux";
import {
  startFetchStrikingMatch,
  startFetchRecentMatch,
  choosePlayerOne,
  choosePlayerTwo,
  chooseTeamOne,
  chooseTeamTwo,
  setScoreOne,
  setScoreTwo
} from "../../redux/entities/matches/Matches.actions";
import {
  selectRecentMatchesToDisplay,
  selectStrikingMatchesToDisplay,
  selectItemRecent,
  selectItemStriking,
  selectPlayerOne,
  selectPlayerTwo,
  selectTeamOne,
  selectTeamTwo
} from "../../redux/entities/matches/Matches.selectors";
import Results from "./Results";

const mapStateToProps = state => ({
  displayRecent: selectRecentMatchesToDisplay(state),
  displayStriking: selectStrikingMatchesToDisplay(state),
  displayItemRecent: selectItemRecent(state),
  displayItemStriking: selectItemStriking(state),
  displayPlayerOne: selectPlayerOne(state),
  displayPlayerTwo: selectPlayerTwo(state),
  displayTeamOne: selectTeamOne(state),
  displayTeamTwo: selectTeamTwo(state)
});

const mapDispatchToProps = dispatch => ({
  fetchRecent: value => dispatch(startFetchRecentMatch(value)),
  fetchStriking: value => dispatch(startFetchStrikingMatch(value)),
  changePlayerOne: value => dispatch(choosePlayerOne(value)),
  changePlayerTwo: value => dispatch(choosePlayerTwo(value)),
  changeTeamOne: value => dispatch(chooseTeamOne(value)),
  changeTeamTwo: value => dispatch(chooseTeamTwo(value)),
  changeScoreOne: event => dispatch(setScoreOne(event.target.value)),
  changeScoreTwo: event => dispatch(setScoreTwo(event.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
