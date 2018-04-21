import React, { Component } from "react";
import "./Home.css";
import { RaisedButton } from "material-ui";
import PeopleIcon from "material-ui-icons/People";
import { GridList, Subheader, GridTile } from "material-ui";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';

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
        display: "flex",
        flexwrap: "wrap",
        justifyContent: "space-around"
      },
      gridList: {
        width: "12vw",
        height: "85vh",
        overflowY: "auto",
        position: "fixed",
        right: "0",
        backgroundColor: "rgba(192,192,192,0.3)"
      },
      button: {
        backgroundColor: "#fcd21c",
        position: "fixed",
        top: "45vh",
        right: "45vw"
      },
      subheader: {
        color: "white",
        fontFamily: 'fifa',
        fontSize: "1.2em",
        fontWeight: "bold",
        textShadow: "1px 1px 2px black"
      },
      table: {
        width: "12vw",
        height: "85vh",
        position: "fixed",
        left: "0",
        backgroundColor: "rgba(192,192,192,0.3)"
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
          player: "Beber",
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
          player: "Tutur",
          points: 17,
          played: 7,
          wins: 5,
          draws: 2,
          losses: 0,
          goaldiff: +11,
          for: 15,
          against: 4,
        },
        {
          id: "3",
          player: "Borcky",
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
        <div className="container" style={styles.root}>
          <GridList 
            cellHeight={200} 
            style={styles.gridList}
            cols={1}
          >
            <Subheader style={styles.subheader}>Resultats  recents</Subheader>
            {matchesData.map(match => (
              <GridTile
                style={styles.gridTile}
                key={match.id}
                title={match.player_one + " - " + match.player_two}
                subtitle={match.team_one + " " + match.score + " " + match.team_two}
                titleBackground="linear-gradient(to top, rgba(0, 51, 102, 1) 0%, rgba(34, 66, 124, 0.5) 80%, rgba(34, 66, 124, 0) 100%)"
              >
              </GridTile>
              ))}
          </GridList>
        </div>
        <RaisedButton
          style={styles.button}
          label="Nouveau Match"
          icon={<PeopleIcon className="muidocs-icon-people" />}
        />
      </div>
    );
  }
}

export default Home;
