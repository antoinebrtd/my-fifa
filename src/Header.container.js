import { connect } from "react-redux";
import {
    openModal,
    closeModal,
} from "/redux/ui/modal/Modal.actions";
import {
    selectStateModal,
} from "/redux/ui/modal/Modal.selectors";
import Header from "./Header";

const mapStateToProps = (state) => {
    isModalOpen: state.modal.isOpen;
};

const mapDispatchToProps = (dispatch) => {
    openModal: () => dispatch(openModal);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
