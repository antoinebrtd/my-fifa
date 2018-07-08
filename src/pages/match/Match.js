import React, { Component } from "react";
import "./Match.css";
import {
  RaisedButton,
  SelectField,
  TextField,
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  MenuItem,
  Chip,
  Snackbar,
  FlatButton,
  Dialog
} from "material-ui";
import DoneIcon from "material-ui-icons/Done";
import AddIcon from "material-ui-icons/GroupAdd";

class Match extends Component {
  addMatch = () => {
    fetch("http://127.0.0.1:8000/matches", {
      method: "POST",
      body: JSON.stringify({
        players: [this.props.displayPlayerOne, this.props.displayPlayerTwo],
        teams: [this.props.displayTeamOne, this.props.displayTeamTwo],
        score: [
          Number(this.props.displayScoreOne),
          Number(this.props.displayScoreTwo)
        ]
      })
    })
      .then(() => this.props.addingMatch())
      .then(
        fetch("http://127.0.0.1:8000/players", {
          method: "GET"
        })
          .then(players => players.json())
          .then(players => {
            let players_array = [];
            for (let i = 0; i < players.length; i++) {
              players_array.push(players[i][0]);
            }
            this.props.fetchingPlayers(players_array);
          })
      )
      .then(
        fetch(
          `http://127.0.0.1:8000/matches/recent/${
            this.props.displayItemRecent
          }`,
          {
            method: "GET"
          }
        )
          .then(recent_matches => recent_matches.json())
          .then(recent_matches => {
            let recent_matches_array = [];
            for (let i = 0; i < recent_matches.length; i++) {
              recent_matches_array.push(recent_matches[i][0]);
            }
            this.props.fetchRecent(
              this.props.displayItemRecent,
              recent_matches_array
            );
          })
      )
      .catch(function(error) {
        console.log("Request failure: ", error);
      });
  };

  addTeam = () => {
    fetch("http://127.0.0.1:8000/teams", {
      method: "POST",
      body: JSON.stringify({
        name: this.props.displayTeam
      })
    })
      .then(() => this.props.addingTeam())
      .then(
        fetch("http://127.0.0.1:8000/teams", {
          method: "GET"
        })
          .then(teams => teams.json())
          .then(teams => {
            let teams_array = [];
            for (let i = 0; i < teams.length; i++) {
              teams_array.push(teams[i][0]);
            }
            this.props.fetchingTeams(teams_array);
          })
      )
      .catch(function(error) {
        console.log("Request failure: ", error);
      });
  };

  render() {
    const styles = {
      chip: {
        width: "8vw",
        marginTop: "3vh",
        marginBottom: "1vh",
        textAlign: "center"
      },
      selectField: {
        width: "8vw"
      }
    };

    const actions = [
      <FlatButton
        label="Annuler"
        primary={true}
        onClick={() => this.props.closingDialog()}
      />,
      <FlatButton
        label="Ajouter"
        primary={true}
        keyboardFocused={true}
        onClick={() => this.addTeam()}
      />
    ];

    return (
      <div className="match_container">
        <div className="new_container">
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle text="Ajouter un match" />
            </ToolbarGroup>
          </Toolbar>
          <div className="select_field">
            <SelectField
              floatingLabelText="Joueur 1"
              floatingLabelStyle={{ color: "white" }}
              style={styles.selectField}
              value={this.props.displayPlayerOne}
              onChange={(event, index, value, number = "one") =>
                this.props.changePlayer(value, number)
              }
            >
              {this.props.players.map(player => (
                <MenuItem
                  value={player.id}
                  primaryText={player.name}
                  key={player.id}
                />
              ))}
            </SelectField>
            <Chip style={styles.chip}>Joueurs</Chip>
            <SelectField
              floatingLabelText="Joueur 2"
              floatingLabelStyle={{ color: "white" }}
              style={styles.selectField}
              value={this.props.displayPlayerTwo}
              onChange={(event, index, value, number = "two") =>
                this.props.changePlayer(value, number)
              }
            >
              {this.props.players.map(player => (
                <MenuItem
                  value={player.id}
                  primaryText={player.name}
                  key={player.id}
                />
              ))}
            </SelectField>
          </div>
          <div className="select_field">
            <SelectField
              floatingLabelText="Equipe 1"
              floatingLabelStyle={{ color: "white" }}
              style={styles.selectField}
              value={this.props.displayTeamOne}
              onChange={(event, index, value, number = "one") =>
                this.props.changeTeam(value, number)
              }
            >
              {this.props.teams.map(team => (
                <MenuItem
                  value={team.id}
                  primaryText={team.name}
                  key={team.id}
                />
              ))}
              <MenuItem
                value={this.props.teams.length + 1}
                primaryText={"Ajouter"}
                leftIcon={<AddIcon className="muidocs-icon-group_add" />}
                onClick={() => this.props.openingDialog()}
              />
            </SelectField>
            <Chip style={styles.chip}>Equipes</Chip>
            <SelectField
              floatingLabelText="Equipe 2"
              floatingLabelStyle={{ color: "white" }}
              style={styles.selectField}
              value={this.props.displayTeamTwo}
              onChange={(event, index, value, number = "two") =>
                this.props.changeTeam(value, number)
              }
            >
              {this.props.teams.map(team => (
                <MenuItem
                  value={team.id}
                  primaryText={team.name}
                  key={team.id}
                />
              ))}
              <MenuItem
                value={this.props.teams.length + 1}
                primaryText={"Ajouter"}
                leftIcon={<AddIcon className="muidocs-icon-group_add" />}
                onClick={() => this.props.openingDialog()}
              />
            </SelectField>
          </div>
          <div className="select_field">
            <TextField
              ref="scoreOne"
              floatingLabelText="Score joueur 1"
              floatingLabelStyle={{ color: "white" }}
              value={this.props.displayScoreOne}
              style={styles.selectField}
              onChange={(event, newValue, number = "one") =>
                this.props.changeScore(event, number)
              }
            />
            <Chip style={styles.chip}>Score</Chip>
            <TextField
              ref="scoreTwo"
              floatingLabelText="Score joueur 2"
              floatingLabelStyle={{ color: "white" }}
              value={this.props.displayScoreTwo}
              style={styles.selectField}
              onChange={(event, newValue, number = "two") =>
                this.props.changeScore(event, number)
              }
            />
          </div>
          <RaisedButton
            label="Ajouter ce match"
            backgroundColor="#fcd21c"
            icon={<DoneIcon className="muidocs-icon-search" />}
            onClick={() => this.addMatch()}
          />
        </div>
        <Snackbar
          open={this.props.displaySnackbar}
          message="Votre match a bien été ajouté"
          autoHideDuration={4000}
          onRequestClose={() => this.props.closingSnackbar()}
        />
        <Snackbar
          open={this.props.displayTeamSnackbar}
          message="Votre équipe a bien été ajoutée"
          autoHideDuration={4000}
          onRequestClose={() => this.props.closingTeamSnackbar()}
        />
        <Dialog
          title="Ajouter une nouvelle équipe"
          actions={actions}
          modal={false}
          open={this.props.displayDialog}
          onRequestClose={() => this.props.closingDialog()}
        >
          Veuillez rentrer le nom de la nouvelle équipe:
          <TextField
            floatingLabelText="Equipe à ajouter"
            value={this.props.displayTeam}
            onChange={(event, newValue) => this.props.changeNewTeam(event)}
          />
        </Dialog>
      </div>
    );
  }
}

export default Match;
