import { connect } from "react-redux";
import {
  choosePlayerOne,
  choosePlayerTwo,
  chooseTeamOne,
  chooseTeamTwo,
  setScoreOne,
  setScoreTwo,
  addMatch
} from "../../redux/entities/addMatch/addMatch.actions";
import {
  selectPlayerOne,
  selectPlayerTwo,
  selectTeamOne,
  selectTeamTwo
} from "../../redux/entities/addMatch/addMatch.selectors";
import Match from "./Match";

const mapStateToProps = state => ({
  displayPlayerOne: selectPlayerOne(state),
  displayPlayerTwo: selectPlayerTwo(state),
  displayTeamOne: selectTeamOne(state),
  displayTeamTwo: selectTeamTwo(state)
});

const mapDispatchToProps = dispatch => ({
  changePlayerOne: value => dispatch(choosePlayerOne(value)),
  changePlayerTwo: value => dispatch(choosePlayerTwo(value)),
  changeTeamOne: value => dispatch(chooseTeamOne(value)),
  changeTeamTwo: value => dispatch(chooseTeamTwo(value)),
  changeScoreOne: event => dispatch(setScoreOne(event.target.value)),
  changeScoreTwo: event => dispatch(setScoreTwo(event.target.value)),
  addingMatch: (score_one, score_two) =>
    dispatch(addMatch(score_one, score_two))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Match);
