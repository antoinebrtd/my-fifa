import { combineReducers } from "redux";
import headerReducer from "./redux/ui/header/Header.reducer";
import playersReducer from "./redux/ui/players/Players.reducer";
import resultsReducer from "./redux/ui/results/Results.reducer";

const rootReducer = combineReducers({
    header: headerReducer,
    players: playersReducer,
    results: resultsReducer
});

export default rootReducer;
