import { fetchTeamsActionTypes } from "./FetchTeams.actions";

const defaultState = {
  teams: []
};

const fetchTeamsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case fetchTeamsActionTypes.FETCH:
      return {
        ...state,
        teams: action.teams
      };
    default:
      return state;
  }
};

export default fetchTeamsReducer;
