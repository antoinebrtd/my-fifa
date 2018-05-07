import { connect } from "react-redux";
import {
    openModal,
    closeModal
} from "/redux/ui/modal/Modal.actions";
import {
    selectModalState
} from "/redux/ui/modal/Modal.selectors";
import Header from "./Header";

const mapStateToProps = state => ({
    open: selectModalState(state),
});

const mapDispatchToProps = dispatch => ({
    openingModal: () => dispatch(openModal()),
    closingModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
