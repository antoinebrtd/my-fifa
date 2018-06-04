import { combineReducers } from "redux";
import headerReducer from "./redux/ui/header/Header.reducer";
import playersReducer from "./redux/ui/players/Players.reducer";
import resultsReducer from "./redux/ui/results/Results.reducer";
import bottomNavReducer from "./redux/ui/bottomNav/BottomNav.reducer";

const rootReducer = combineReducers({
    header: headerReducer,
    players: playersReducer,
    results: resultsReducer,
    bottomNav: bottomNavReducer
});

export default rootReducer;
