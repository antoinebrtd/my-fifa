import combineReducers from "redux";
import modalReducer from "/redux/ui/modal/Modal.reducer";

const rootReducer = combineReducers({
    modal: modalReducer
});

export default rootReducer;
