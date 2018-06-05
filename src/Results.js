import React, { Component } from "react";
import "./Results.css";
import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  DropDownMenu,
  MenuItem,
  ToolbarSeparator,
  RaisedButton,
  Chip,
  SelectField,
  TextField,
  DatePicker,
  GridList,
  GridTile
} from "material-ui";
import { Link } from "react-router-dom";
import SortIcon from "material-ui-icons/Sort";
import PeopleIcon from "material-ui-icons/People";
import SearchIcon from "material-ui-icons/Search";

import { playersData, teamsData } from "./redux/entities/Data";

class Results extends Component {
  render() {
    const styles = {
      button: {
        marginLeft: "1vw"
      },
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

    return (
      <div className="resultspage_container">
        <div className="results_container">
          <div className="recent_container">
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle text="Derniers résultats" />
                <DropDownMenu
                  value={this.props.displayItemRecent}
                  onChange={(event, index, value) =>
                    this.props.handleDisplayRecent(value)
                  }
                >
                  <MenuItem value={0} primaryText="Aujourd'hui" />
                  <MenuItem value={1} primaryText="Cette semaine" />
                  <MenuItem value={2} primaryText="Ce mois" />
                </DropDownMenu>
              </ToolbarGroup>
              <ToolbarGroup>
                <SortIcon className="muidocs-icon-sort" />
                <ToolbarSeparator />
                <Link to="/Match">
                  <RaisedButton
                    style={styles.button}
                    label="Nouveau Match"
                    backgroundColor="#fcd21c"
                    icon={<PeopleIcon className="muidocs-icon-people" />}
                  />
                </Link>
              </ToolbarGroup>
            </Toolbar>
          </div>
          <div className="striking_container">
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle text="Résultats marquants" />
                <DropDownMenu
                  value={this.props.displayItemStriking}
                  onChange={(event, index, value) =>
                    this.props.fetchStriking(value)
                  }
                >
                  <MenuItem value={0} primaryText="Haute-volée" />
                  <MenuItem value={1} primaryText="Humiliation" />
                  <MenuItem value={2} primaryText="Bus" />
                </DropDownMenu>
              </ToolbarGroup>
              <ToolbarGroup lastChild={true}>
                <ToolbarSeparator />
                <SortIcon
                  className="muidocs-icon-sort"
                  style={{ margin: "1vw" }}
                />
              </ToolbarGroup>
            </Toolbar>
            <GridList cellHeight={200} cols={2.2}>
              {this.props.displayStriking.map(match => (
                <GridTile
                  key={match.id}
                  title={`${
                    playersData.find(player => player.id === match.players[0])
                      .name
                  } -  ${
                    playersData.find(player => player.id === match.players[1])
                      .name
                  }`}
                  subtitle={`${
                    teamsData.find(team => team.id === match.teams[0]).name
                  } ${match.score[0]} - ${match.score[1]} ${
                    teamsData.find(team => team.id === match.teams[1]).name
                  }`}
                  titleBackground="linear-gradient(to top, rgba(0, 51, 102, 1) 0%, rgba(34, 66, 124, 0.5) 80%, rgba(34, 66, 124, 0) 100%)"
                />
              ))}
            </GridList>
          </div>
          <div className="search_container">
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle text="Trouver un match" />
              </ToolbarGroup>
            </Toolbar>
            <div className="select_field">
              <SelectField
                floatingLabelText="Joueur 1"
                floatingLabelStyle={{ color: "white" }}
                style={styles.selectField}
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
                floatingLabelText="Score joueur 1"
                floatingLabelStyle={{ color: "white" }}
                textFieldStyle={{ color: "white" }}
                style={styles.selectField}
              />
              <Chip style={styles.chip}>Score</Chip>
              <TextField
                floatingLabelText="Score joueur 2"
                floatingLabelStyle={{ color: "white" }}
                textFieldStyle={{ color: "white" }}
                style={styles.selectField}
              />
            </div>
            <div className="select_field">
              <DatePicker hintText="Date" textFieldStyle={{ color: "white" }} />
            </div>
            <RaisedButton
              style={styles.button}
              label="Lancer la recherche"
              backgroundColor="#fcd21c"
              icon={<SearchIcon className="muidocs-icon-search" />}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
