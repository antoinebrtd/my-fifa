import { connect } from "react-redux";
import {
    displayZero,
    displayOne,
    displayTwo
} from "./redux/ui/players/Players.actions";
import {
    selectTabsState
} from "./redux/ui/players/Players.selectors";
import Players from "./Players";

const mapStateToProps = state => ({
    display: selectTabsState(state),
});

const mapDispatchToProps = dispatch => ({
    displayingOne: () => dispatch(displayZero()),
    displayingTwo: () => dispatch(displayOne()),
    displayingThree: () => dispatch(displayTwo())
});

export default connect(mapStateToProps, mapDispatchToProps)(PLayers);
