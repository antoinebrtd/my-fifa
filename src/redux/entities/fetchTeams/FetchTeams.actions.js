export const fetchTeamsActionTypes = {
  FETCH: "FETCH.TEAMS"
};

export const fetchTeams = teams => ({
  type: fetchTeamsActionTypes.FETCH,
  teams: teams
});

export default {
  fetchTeams
};
