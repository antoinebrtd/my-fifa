import { connect } from "react-redux";
import { switchDisplay } from "../../redux/ui/players/Players.actions";
import { selectTabsState } from "../../redux/ui/players/Players.selectors";
import Players from "./Players";

const mapStateToProps = state => ({
  display: selectTabsState(state)
});

const mapDispatchToProps = dispatch => ({
  handleDisplay: value => dispatch(switchDisplay(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Players);
