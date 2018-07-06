export const addTeamActionTypes = {
  DISPLAY: {
    OPEN_DIALOG: "OPEN.DIALOG",
    CLOSE_DIALOG: "CLOSE.DIALOG",
    CLOSE_TEAM_SNACKBAR: "CLOSE.TEAM.SNACKBAR"
  },
  ADD: {
    ADD_TEAM: "ADD.TEAM"
  },
  SET: {
    TEAM: "SET.TEAM"
  }
};

export const openDialog = () => ({
  type: addTeamActionTypes.DISPLAY.OPEN_DIALOG
});

export const closeDialog = () => ({
  type: addTeamActionTypes.DISPLAY.CLOSE_DIALOG
});

export const setTeam = event => ({
  type: addTeamActionTypes.SET.TEAM,
  team: event.target.value
});

export const addTeam = () => ({
  type: addTeamActionTypes.ADD.ADD_TEAM
});

export const closeTeamSnackbar = () => ({
  type: addTeamActionTypes.DISPLAY.CLOSE_TEAM_SNACKBAR
});

export default {
  openDialog,
  closeDialog,
  setTeam,
  addTeam,
  closeTeamSnackbar
};
