import React, { Component } from "react";
import { RaisedButton } from "material-ui";
import PeopleIcon from "material-ui-icons/People";
import { GridList, Subheader, GridTile } from "material-ui";

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
        width: 350,
        height: 550,
        overflowY: "auto"
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
      }
    ];

    return (
      <div>
        <RaisedButton
          label="Nouveau Match"
          icon={<PeopleIcon className="muidocs-icon-people" />}
        />
        <GridList cellHeight={100} style={styles.gridList}>
          <Subheader>Résultats récents</Subheader>
          {matchesData.map(match => (
            <GridTile
              key={match.id}
              title={match.player_one + " - " + match.player_two}
              subtitle={
                match.team_one + " " + match.score + " " + match.team_two
              }
            >
              <img src={match.img_one} />
              <img src={match.img_two} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default Home;
