import { connect } from "react-redux";
import {
    displayTicket,
    displayLanguage,
    displayContact
} from "./redux/ui/bottomNav/BottomNav.actions";
import {
    selectBottomNavState
} from "./redux/ui/bottomNav/BottomNav.selectors";
import BottomNav from "./BottomNav";

const mapStateToProps = state => ({
    display: selectBottomNavState(state),
});

const mapDispatchToProps = dispatch => ({
    displayingTicket: () => dispatch(displayTicket()),
    displayingLanguage: () => dispatch(displayLanguage()),
    displayingContact: () => dispatch(displayContact())
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomNav);