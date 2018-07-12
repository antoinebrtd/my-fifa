import React, { Component } from "react";
import "./Home.css";
import PeopleIcon from "material-ui-icons/People";
import {
  RaisedButton,
  GridList,
  Subheader,
  GridTile,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui";
import { Link } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    fetch("http://127.0.0.1:8000/players", {
      method: "GET"
    })
      .then(players => players.json())
      .then(players => this.props.fetchingPlayers(players))
      .then(
        fetch("http://127.0.0.1:8000/teams", {
          method: "GET"
        })
          .then(teams => teams.json())
          .then(teams => this.props.fetchingTeams(teams))
      )
      .then(
        fetch(`http://127.0.0.1:8000/matches?recent=${0}`, {
          method: "GET"
        })
          .then(recent_matches => recent_matches.json())
          .then(recent_matches => this.props.fetchRecent(0, recent_matches))
      )
      .catch(function(error) {
        console.log("Request failure: ", error);
      });
  }

  render() {
    const styles = {
      root: {
        width: "12vw",
        height: "85vh",
        display: "flex",
        flexwrap: "wrap",
        justifyContent: "space-around",
        flexDirection: "column",
        overflowY: "auto",
        backgroundColor: "rgba(255,255,255,0.4)"
      },
      gridList: {
        overflowY: "auto"
      },
      subheader: {
        color: "#fcd21c",
        fontFamily: "fifa",
        fontSize: "1.2em",
        fontWeight: "bold",
        textShadow: "1px 1px 2px black"
      },
      gridTile: {
        backgroundColor: "rgba(255,255,255,0.4)"
      },
      tableContainer: {
        width: "12vw",
        height: "85vh",
        backgroundColor: "rgba(192,192,192,0.3)",
        overflowY: "auto"
      },
      subheaderbis: {
        color: "#fcd21c",
        fontFamily: "fifa",
        fontSize: "1.2em",
        fontWeight: "bold",
        textShadow: "1px 1px 2px black",
        margin: "2vh"
      },
      table: {
        backgroundColor: "rgba(0, 51, 102, 0.6)"
      },
      tableRow: {
        color: "white"
      },
      column: {
        padding: "0"
      },
      button_container: {
        width: "76vw",
        height: "85vh",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
      }
    };

    return (
      <div className="home">
        <div className="container" style={styles.tableContainer}>
          <h3 style={styles.subheaderbis}>Classements</h3>
          <div id="general" style={{ marginBottom: "1vh" }}>
            <Table style={styles.table}>
              <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                <TableRow>
                  <TableHeaderColumn
                    style={{
                      color: "white",
                      fontSize: "1.3em",
                      fontWeight: "bold"
                    }}
                  >
                    Général
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  <TableHeaderColumn>Pos.</TableHeaderColumn>
                  <TableHeaderColumn style={styles.column}>
                    Nom
                  </TableHeaderColumn>
                  <TableHeaderColumn>Pts</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {this.props.players.map(player => (
                  <TableRow style={styles.tableRow} key={player.id}>
                    <TableRowColumn>
                      {this.props.players.indexOf(player) + 1}
                    </TableRowColumn>
                    <TableRowColumn style={styles.column}>
                      {player.name}
                    </TableRowColumn>
                    <TableRowColumn>{player.points}</TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div id="difference" style={{ marginBottom: "1vh" }}>
            <Table style={styles.table}>
              <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                <TableRow>
                  <TableHeaderColumn
                    style={{
                      color: "white",
                      fontSize: "1.3em",
                      fontWeight: "bold"
                    }}
                  >
                    Différence
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  <TableHeaderColumn>Pos.</TableHeaderColumn>
                  <TableHeaderColumn style={styles.column}>
                    Nom
                  </TableHeaderColumn>
                  <TableHeaderColumn>Diff</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {this.props.players.map(player => (
                  <TableRow style={styles.tableRow} key={player.id}>
                    <TableRowColumn>
                      {this.props.players.indexOf(player) + 1}
                    </TableRowColumn>
                    <TableRowColumn style={styles.column}>
                      {player.name}
                    </TableRowColumn>
                    <TableRowColumn>{player.goaldiff}</TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div id="attaque" style={{ marginBottom: "1vh" }}>
            <Table style={styles.table}>
              <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                <TableRow>
                  <TableHeaderColumn
                    style={{
                      color: "white",
                      fontSize: "1.3em",
                      fontWeight: "bold"
                    }}
                  >
                    Attaque
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  <TableHeaderColumn>Pos.</TableHeaderColumn>
                  <TableHeaderColumn style={styles.column}>
                    Nom
                  </TableHeaderColumn>
                  <TableHeaderColumn>Pour</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {this.props.players.map(player => (
                  <TableRow style={styles.tableRow} key={player.id}>
                    <TableRowColumn>
                      {this.props.players.indexOf(player) + 1}
                    </TableRowColumn>
                    <TableRowColumn style={styles.column}>
                      {player.name}
                    </TableRowColumn>
                    <TableRowColumn>{player.for}</TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Link to="/Rankings" style={{ color: "white", margin: "2vh" }}>
            Voir tout
          </Link>
        </div>
        <div className="button_container" style={styles.button_container}>
          <Link to="/Match">
            <RaisedButton
              label="Nouveau Match"
              backgroundColor="#fcd21c"
              icon={<PeopleIcon className="muidocs-icon-people" />}
            />
          </Link>
        </div>
        <div className="container" style={styles.root}>
          {this.props.teams.length > 0 &&
            this.props.players.length > 0 && (
              <GridList cellHeight={200} cols={1} style={styles.gridList}>
                <Subheader style={styles.subheader}>
                  Resultats recents
                </Subheader>
                {this.props.displayRecent.map(
                  match =>
                    this.props.teams.length > 0 &&
                    this.props.players.length > 0 && (
                      <GridTile
                        style={styles.gridTile}
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
            )}
          <Link to="/Results" style={{ color: "white", margin: "2vh" }}>
            Voir tout
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
