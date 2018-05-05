import React, { Component } from "react";
import "./Home.css";
import { RaisedButton } from "material-ui";
import PeopleIcon from "material-ui-icons/People";
import { GridList, Subheader, GridTile } from "material-ui";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';
import { Link } from "react-router-dom";

import arsn from "./images/resultats_recents/arsn.jpg";
import fcb from "./images/resultats_recents/fcb.jpg";
import juv from "./images/resultats_recents/juv.jpg";
import liv from "./images/resultats_recents/liv.jpg";
import mancity from "./images/resultats_recents/mancity.jpg";
import rma from "./images/resultats_recents/rma.jpg";

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
        overflowY: "auto",
      },
      subheader: {
        color: "#fcd21c",
        fontFamily: 'fifa',
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
        overflowY: "auto",
      },      
      subheaderbis: {
        color: "#fcd21c",
        fontFamily: 'fifa',
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
    const matchesData = [
      {
        id: "1",
        player_one: "Beber",
        player_two: "Borcky",
        team_one: "Liv",
        team_two: "ManCity",
        score: "3 - 1",
        img_one: liv,
        img_two: mancity
      },
      {
        id: "2",
        player_one: "Beber",
        player_two: "Tutur",
        team_one: "RMA",
        team_two: "FCB",
        score: "3 - 4",
        img_one: rma,
        img_two: fcb
      },
      {
        id: "3",
        player_one: "Borcky",
        player_two: "Tutur",
        team_one: "Arsenal",
        team_two: "Juv",
        score: "3 - 2",
        img_one: arsn,
        img_two: juv
      },
      {
        id: "4",
        player_one: "Borcky",
        player_two: "Beber",
        team_one: "ManCity",
        team_two: "Juv",
        score: "3 - 2",
        img_one: mancity,
        img_two: juv
      },
      {
        id: "5",
        player_one: "Tutur",
        player_two: "Beber",
        team_one: "RMA",
        team_two: "Juv",
        score: "3 - 2",
        img_one: rma,
        img_two: juv
      },
      {
        id: "6",
        player_one: "Borcky",
        player_two: "Tutur",
        team_one: "ManCity",
        team_two: "Liv",
        score: "3 - 2",
        img_one: mancity,
        img_two: liv
      }
    ];

    const rankingsData = [
        {
          id: "1",
          name: "Beber",
          points: 15,
          played: 7,
          wins: 5,
          draws: 0,
          losses: 2,
          goaldiff: +12,
          for: 15,
          against: 3,
        },
        {
          id: "2",
          name: "Tutur",
          points: 17,
          played: 7,
          wins: 5,
          draws: 2,
          losses: 0,
          goaldiff: +11,
          for: 16,
          against: 5,
        },
        {
          id: "3",
          name: "Borcky",
          points: 10,
          played: 7,
          wins: 3,
          draws: 1,
          losses: 3,
          goaldiff: -9,
          for: 6,
          against: 15,
        }
    ];

    return (
      <div className="home">
        <div className="container" style={styles.tableContainer}>
          <h3 style={styles.subheaderbis}>Classements</h3>
          <div id="general" style={{ marginBottom: "1vh" }}>
            <Table 
              style={styles.table}
            >
              <TableHeader 
                adjustForCheckbox={false}
                displaySelectAll={false}
              >
                <h4 style={{ color: "white", marginBottom: "0", marginLeft: "1vw" }}>Général</h4>
                <TableRow>
                  <TableHeaderColumn>Pos.</TableHeaderColumn>
                  <TableHeaderColumn style={styles.column}>Nom</TableHeaderColumn>
                  <TableHeaderColumn>Pts</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {rankingsData.map(player => (
                  <TableRow style={styles.tableRow}>
                    <TableRowColumn>{rankingsData.indexOf(player) + 1}</TableRowColumn>
                    <TableRowColumn style={styles.column}>{player.name}</TableRowColumn>
                    <TableRowColumn>{player.points}</TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div id="difference" style={{ marginBottom: "1vh" }}>
            <Table 
              style={styles.table}
            >
              <TableHeader 
                adjustForCheckbox={false}
                displaySelectAll={false}
              >
                <h4 style={{ color: "white", marginBottom: "0", marginLeft: "1vw" }}>Différence</h4>
                <TableRow>
                  <TableHeaderColumn>Pos.</TableHeaderColumn>
                  <TableHeaderColumn style={styles.column}>Nom</TableHeaderColumn>
                  <TableHeaderColumn>Diff</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {rankingsData.map(player => (
                  <TableRow style={styles.tableRow}>
                    <TableRowColumn>{rankingsData.indexOf(player) + 1}</TableRowColumn>
                    <TableRowColumn style={styles.column}>{player.name}</TableRowColumn>
                    <TableRowColumn>{player.goaldiff}</TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div id="attaque" style={{ marginBottom: "1vh" }}>
            <Table 
              style={styles.table}
            >
              <TableHeader 
                adjustForCheckbox={false}
                displaySelectAll={false}
              >
                <h4 style={{ color: "white", marginBottom: "0", marginLeft: "1vw" }}>Attaque</h4>
                <TableRow>
                  <TableHeaderColumn>Pos.</TableHeaderColumn>
                  <TableHeaderColumn style={styles.column}>Nom</TableHeaderColumn>
                  <TableHeaderColumn>Pour</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {rankingsData.map(player => (
                  <TableRow style={styles.tableRow}>
                    <TableRowColumn>{rankingsData.indexOf(player) + 1}</TableRowColumn>
                    <TableRowColumn style={styles.column}>{player.name}</TableRowColumn>
                    <TableRowColumn>{player.for}</TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Link to="/Rankings" style={{ color: "white", margin: "2vh" }}>Voir tout</Link>
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
          <GridList 
            cellHeight={200} 
            cols={1}
            style={styles.gridList}
          >
            <Subheader style={styles.subheader}>Resultats  recents</Subheader>
            {matchesData.map(match => (
              <GridTile
                style={styles.gridTile}
                key={match.id}
                title={`${match.player_one} -  ${match.player_two}`}
                subtitle={`${match.team_one} ${match.score} ${match.team_two}`}
                titleBackground="linear-gradient(to top, rgba(0, 51, 102, 1) 0%, rgba(34, 66, 124, 0.5) 80%, rgba(34, 66, 124, 0) 100%)"
              >
              </GridTile>
              ))}
          </GridList>
          <Link to="/Results" style={{ color: "white", margin: "2vh" }}>Voir tout</Link>
        </div>
      </div>
    );
  }
}

export default Home;
