import { connect } from "react-redux";
import {
    openDrawer,
    closeDrawer
} from "./redux/ui/header/Header.actions";
import {
    selectDrawerState
} from "./redux/ui/header/Header.selectors";
import Header from "./Header";

const mapStateToProps = state => ({
    open: selectDrawerState(state),
});

const mapDispatchToProps = dispatch => ({
    openingDrawer: () => dispatch(openDrawer()),
    closingDrawer: () => dispatch(closeDrawer())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
