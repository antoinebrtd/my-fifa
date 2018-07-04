import { combineReducers } from "redux";
import headerReducer from "./redux/ui/header/Header.reducer";
import playersReducer from "./redux/ui/players/Players.reducer";
import addMatchReducer from "./redux/entities/addMatch/AddMatch.reducer";
import fetchMatchReducer from "./redux/entities/fetchMatch/FetchMatch.reducer";
import bottomNavReducer from "./redux/ui/bottomNav/BottomNav.reducer";
import fetchPlayersReducer from "./redux/entities/fetchPlayers/FetchPlayers.reducer";
import fetchTeamsReducer from "./redux/entities/fetchTeams/FetchTeams.reducer";

const rootReducer = combineReducers({
  header: headerReducer,
  players: playersReducer,
  addMatch: addMatchReducer,
  fetchMatch: fetchMatchReducer,
  bottomNav: bottomNavReducer,
  fetchPlayers: fetchPlayersReducer,
  fetchTeams: fetchTeamsReducer
});

export default rootReducer;
