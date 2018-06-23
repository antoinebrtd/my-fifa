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
  Chip
} from "material-ui";
import DoneIcon from "material-ui-icons/Done";

import { playersData, teamsData } from "../../redux/entities/Data";

class Match extends Component {
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

    //let player_one = {this.props.displayPlayerOne};
    //let player_two = {this.props.displayPlayerTwo};
    //let team_one = {this.props.displayTeamOne};
    //let team_two = {this.props.displayTeamTwo};
    //let score_one = this.refs.scoreOne.input.value;
    //let score_two = this.refs.scoreTwo.input.value;

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
              onChange={(event, index, value) =>
                this.props.changePlayerOne(value)
              }
            >
              {playersData.map(player => (
                <MenuItem
                  value={playersData.indexOf(player) + 1}
                  primaryText={player.name}
                />
              ))}
            </SelectField>
            <Chip style={styles.chip}>Joueurs</Chip>
            <SelectField
              floatingLabelText="Joueur 2"
              floatingLabelStyle={{ color: "white" }}
              style={styles.selectField}
              value={this.props.displayPlayerTwo}
              onChange={(event, index, value) =>
                this.props.changePlayerTwo(value)
              }
            >
              {playersData.map(player => (
                <MenuItem
                  value={playersData.indexOf(player) + 1}
                  primaryText={player.name}
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
              onChange={(event, index, value) =>
                this.props.changeTeamOne(value)
              }
            >
              {teamsData.map(team => (
                <MenuItem
                  value={teamsData.indexOf(team) + 1}
                  primaryText={team.name}
                />
              ))}
            </SelectField>
            <Chip style={styles.chip}>Equipes</Chip>
            <SelectField
              floatingLabelText="Equipe 2"
              floatingLabelStyle={{ color: "white" }}
              style={styles.selectField}
              value={this.props.displayTeamTwo}
              onChange={(event, index, value) =>
                this.props.changeTeamTwo(value)
              }
            >
              {teamsData.map(team => (
                <MenuItem
                  value={teamsData.indexOf(team) + 1}
                  primaryText={team.name}
                />
              ))}
            </SelectField>
          </div>
          <div className="select_field">
            <TextField
              ref="scoreOne"
              floatingLabelText="Score joueur 1"
              floatingLabelStyle={{ color: "white" }}
              style={styles.selectField}
              onChange={(event, newValue) => this.props.changeScoreOne(event)}
            />
            <Chip style={styles.chip}>Score</Chip>
            <TextField
              ref="scoreTwo"
              floatingLabelText="Score joueur 2"
              floatingLabelStyle={{ color: "white" }}
              style={styles.selectField}
              onChange={(event, newValue) => this.props.changeScoreTwo(event)}
            />
          </div>
          <RaisedButton
            label="Ajouter ce match"
            backgroundColor="#fcd21c"
            icon={<DoneIcon className="muidocs-icon-search" />}
            onClick={(score_one, score_two) =>
              this.props.addingMatch(score_one, score_two)
            }
          />
        </div>
      </div>
    );
  }
}

export default Match;
