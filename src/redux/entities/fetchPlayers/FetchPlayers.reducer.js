import { fetchPlayersActionTypes } from "./FetchPlayers.actions";

const defaultState = {
  players: []
};

const fetchPlayersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case fetchPlayersActionTypes.FETCH:
      return {
        ...state,
        players: action.players
      };
    default:
      return state;
  }
};

export default fetchPlayersReducer;
