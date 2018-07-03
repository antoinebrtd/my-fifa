export const fetchPlayersActionTypes = {
  FETCH: "FETCH.PLAYERS"
};

export const fetchPlayers = players => ({
  type: fetchPlayersActionTypes.FETCH,
  players: players
});

export default {
  fetchPlayers
};
