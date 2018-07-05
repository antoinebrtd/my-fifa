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
import * as moment from "moment";
import { playersData, teamsData } from "../../redux/entities/Data";

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
        ],
        date: moment().format()
      })
    })
      .then(() => this.props.addingMatch())
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
        onClick={() => this.props.addingTeam()}
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
              {playersData.map(player => (
                <MenuItem
                  value={playersData.indexOf(player) + 1}
                  primaryText={player.name}
                  key={playersData.indexOf(player)}
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
              {playersData.map(player => (
                <MenuItem
                  value={playersData.indexOf(player) + 1}
                  primaryText={player.name}
                  key={playersData.indexOf(player) + playersData.length}
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
              {teamsData.map(team => (
                <MenuItem
                  value={teamsData.indexOf(team) + 1}
                  primaryText={team.name}
                  key={teamsData.indexOf(team) + 2 * playersData.length}
                />
              ))}
              <MenuItem
                value={teamsData.length + 1}
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
              {teamsData.map(team => (
                <MenuItem
                  value={teamsData.indexOf(team) + 1}
                  primaryText={team.name}
                  key={
                    teamsData.indexOf(team) +
                    teamsData.length +
                    2 * playersData.length
                  }
                />
              ))}
              <MenuItem
                value={teamsData.length + 1}
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
          Open a Date Picker dialog from within a dialog.
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
