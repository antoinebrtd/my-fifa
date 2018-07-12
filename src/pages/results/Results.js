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

class Results extends Component {
  fetchRecentMatches = value => {
    fetch(`http://127.0.0.1:8000/matches?recent=${value}`, {
      method: "GET"
    })
      .then(recent_matches => recent_matches.json())
      .then(recent_matches => this.props.fetchRecent(value, recent_matches))
      .catch(function(error) {
        console.log("Request failure: ", error);
      });
  };

  fetchStrikingMatches = value => {
    fetch(`http://127.0.0.1:8000/matches?striking=${value}`, {
      method: "GET"
    })
      .then(striking_matches => striking_matches.json())
      .then(striking_matches =>
        this.props.fetchStriking(value, striking_matches)
      )
      .catch(function(error) {
        console.log("Request failure: ", error);
      });
  };

  componentWillMount() {
    this.fetchRecentMatches(this.props.displayItemRecent);
    this.fetchStrikingMatches(this.props.displayItemStriking);
  }

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
      },
      gridList: {
        display: "flex",
        flexWrap: "nowrap",
        overflowX: "auto"
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
                    this.fetchRecentMatches(value)
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
            {this.props.teams.length > 0 &&
              this.props.players.length > 0 && (
                <GridList cellHeight={200} cols={2.2} style={styles.gridList}>
                  {this.props.displayRecent.map(match => (
                    <GridTile
                      key={match.id}
                      title={`${
                        this.props.players.find(
                          player => player.id === match.players[0]
                        ).name
                      } -  ${
                        this.props.players.find(
                          player => player.id === match.players[1]
                        ).name
                      }`}
                      subtitle={`${
                        this.props.teams.find(
                          team => team.id === match.teams[0]
                        ).name
                      } ${match.score[0]} - ${match.score[1]} ${
                        this.props.teams.find(
                          team => team.id === match.teams[1]
                        ).name
                      }`}
                      titleBackground="linear-gradient(to top, rgba(0, 51, 102, 1) 0%, rgba(34, 66, 124, 0.5) 80%, rgba(34, 66, 124, 0) 100%)"
                      style={{ width: "12vw" }}
                    />
                  ))}
                </GridList>
              )}
          </div>
          <div className="striking_container">
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle text="Résultats marquants" />
                <DropDownMenu
                  value={this.props.displayItemStriking}
                  onChange={(event, index, value) =>
                    this.fetchStrikingMatches(value)
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
            <GridList cellHeight={200} cols={2.2} style={styles.gridList}>
              {this.props.displayStriking.map(
                match =>
                  this.props.teams.length > 0 &&
                  this.props.players.length > 0 && (
                    <GridTile
                      key={match.id}
                      title={`${
                        this.props.players.find(
                          player => player.id === match.players[0]
                        ).name
                      } -  ${
                        this.props.players.find(
                          player => player.id === match.players[1]
                        ).name
                      }`}
                      subtitle={`${
                        this.props.teams.find(
                          team => team.id === match.teams[0]
                        ).name
                      } ${match.score[0]} - ${match.score[1]} ${
                        this.props.teams.find(
                          team => team.id === match.teams[1]
                        ).name
                      }`}
                      titleBackground="linear-gradient(to top, rgba(0, 51, 102, 1) 0%, rgba(34, 66, 124, 0.5) 80%, rgba(34, 66, 124, 0) 100%)"
                    />
                  )
              )}
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
                {this.props.players.map(player => (
                  <MenuItem
                    value={this.props.players.id}
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
              >
                {this.props.players.map(player => (
                  <MenuItem
                    value={this.props.players.id}
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
              >
                {this.props.teams.map(team => (
                  <MenuItem
                    value={this.props.teams.id}
                    primaryText={team.name}
                    key={team.id}
                  />
                ))}
              </SelectField>
              <Chip style={styles.chip}>Equipes</Chip>
              <SelectField
                floatingLabelText="Equipe 2"
                floatingLabelStyle={{ color: "white" }}
                style={styles.selectField}
              >
                {this.props.teams.map(team => (
                  <MenuItem
                    value={this.props.teams.id}
                    primaryText={team.name}
                    key={team.id}
                  />
                ))}
              </SelectField>
            </div>
            <div className="select_field">
              <TextField
                floatingLabelText="Score joueur 1"
                floatingLabelStyle={{ color: "white" }}
                style={styles.selectField}
              />
              <Chip style={styles.chip}>Score</Chip>
              <TextField
                floatingLabelText="Score joueur 2"
                floatingLabelStyle={{ color: "white" }}
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
