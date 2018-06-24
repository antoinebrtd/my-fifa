import { combineReducers } from "redux";
import headerReducer from "./redux/ui/header/Header.reducer";
import playersReducer from "./redux/ui/players/Players.reducer";
import addMatchReducer from "./redux/entities/addMatch/addMatch.reducer";
import fetchMatchReducer from "./redux/entities/fetchMatch/fetchMatch.reducer";
import bottomNavReducer from "./redux/ui/bottomNav/BottomNav.reducer";

const rootReducer = combineReducers({
  header: headerReducer,
  players: playersReducer,
  addMatch: addMatchReducer,
  fetchMatch: fetchMatchReducer,
  bottomNav: bottomNavReducer
});

export default rootReducer;
