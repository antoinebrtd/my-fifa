import React, { Component } from "react";
import "./Home.css";
import { RaisedButton } from "material-ui";
import PeopleIcon from "material-ui-icons/People";
import { GridList, Subheader, GridTile } from "material-ui";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui";
import { Link } from "react-router-dom";

import { playersData, matchesData, teamsData } from "../../redux/entities/Data";

class Home extends Component {
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
                <h4
                  style={{
                    color: "white",
                    marginBottom: "0",
                    marginLeft: "1vw"
                  }}
                >
                  Général
                </h4>
                <TableRow>
                  <TableHeaderColumn>Pos.</TableHeaderColumn>
                  <TableHeaderColumn style={styles.column}>
                    Nom
                  </TableHeaderColumn>
                  <TableHeaderColumn>Pts</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {playersData.map(player => (
                  <TableRow style={styles.tableRow}>
                    <TableRowColumn>
                      {playersData.indexOf(player) + 1}
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
                <h4
                  style={{
                    color: "white",
                    marginBottom: "0",
                    marginLeft: "1vw"
                  }}
                >
                  Différence
                </h4>
                <TableRow>
                  <TableHeaderColumn>Pos.</TableHeaderColumn>
                  <TableHeaderColumn style={styles.column}>
                    Nom
                  </TableHeaderColumn>
                  <TableHeaderColumn>Diff</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {playersData.map(player => (
                  <TableRow style={styles.tableRow}>
                    <TableRowColumn>
                      {playersData.indexOf(player) + 1}
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
                <h4
                  style={{
                    color: "white",
                    marginBottom: "0",
                    marginLeft: "1vw"
                  }}
                >
                  Attaque
                </h4>
                <TableRow>
                  <TableHeaderColumn>Pos.</TableHeaderColumn>
                  <TableHeaderColumn style={styles.column}>
                    Nom
                  </TableHeaderColumn>
                  <TableHeaderColumn>Pour</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {playersData.map(player => (
                  <TableRow style={styles.tableRow}>
                    <TableRowColumn>
                      {playersData.indexOf(player) + 1}
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
          <GridList cellHeight={200} cols={1} style={styles.gridList}>
            <Subheader style={styles.subheader}>Resultats recents</Subheader>
            {matchesData.map(match => (
              <GridTile
                style={styles.gridTile}
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
          <Link to="/Results" style={{ color: "white", margin: "2vh" }}>
            Voir tout
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
