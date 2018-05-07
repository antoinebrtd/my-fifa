import { combineReducers } from "redux";
import headerReducer from "./redux/ui/header/Header.reducer";
import playersReducer from "./redux/ui/players/Players.reducer";

const rootReducer = combineReducers({
    header: headerReducer,
    players: playersReducer
});

export default rootReducer;
