import { combineReducers } from "redux";
import headerReducer from "./redux/ui/header/Header.reducer";
import playersReducer from "./redux/ui/players/Players.reducer";
import matchesReducer from "./redux/entities/matches/Matches.reducer";
import bottomNavReducer from "./redux/ui/bottomNav/BottomNav.reducer";

const rootReducer = combineReducers({
  header: headerReducer,
  players: playersReducer,
  matches: matchesReducer,
  bottomNav: bottomNavReducer
});

export default rootReducer;
