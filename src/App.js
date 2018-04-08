import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import RaisedButton from '../node_modules/material-ui/RaisedButton';
import FontIcon from '../node_modules/material-ui/FontIcon';
import { GridList, Subheader, GridTile } from 'material-ui';

class App extends Component {

  render() {
    const styles = {
      root: {
        display: 'flex',
        flexwrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 350,
        height: 550,
        overflowY: 'auto',
      },
    };
    const matchesData = [
      {
        id: '1',
        player_one: 'Beber',
        player_two: 'Borcky',
        team_one: 'Liv',
        team_two: 'ManCity',
        score: '3 - 1',
        img_one: 'images/resultats_recents/liv.jpg',
        img_two: 'images/resultats_recents/mancity.jpg',
      },
      {
        id: '2',
        player_one: 'Beber',
        player_two: 'Tutur',
        team_one: 'RMA',
        team_two: 'FCB',
        score: '3 - 4',
        img_one: 'images/resultats_recents/rma.jpg',
        img_two: 'images/resultats_recents/fcb.jpg',        
      },
      {
        id: '3',
        player_one: 'Borcky',
        player_two: 'Tutur',
        team_one: 'Arsenal',
        team_two: 'Juv',
        score: '3 - 2',
        img_one: 'images/resultats_recents/arsn.jpg',
        img_two: 'images/resultats_recents/juv.jpg',   
      },
      {
        id: '4',
        player_one: 'Borcky',
        player_two: 'Beber',
        team_one: 'ManCity',
        team_two: 'Juv',
        score: '3 - 2',
        img_one: 'images/resultats_recents/mancity.jpg',
        img_two: 'images/resultats_recents/juv.jpg', 
      },
    ];

    return (
      <div className="App">
        <MuiThemeProvider>
          <Header/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <RaisedButton
            label="Nouveau Match"
            icon={<FontIcon className="muidocs-icon-social-people" />}
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <GridList
            cellHeight={100}
            style={styles.gridList}
          >
            <Subheader>Résultats récents</Subheader>
            {matchesData.map((match) => (
              <GridTile
                key={match.id}
                title={match.player_one + " - " + match.player_two}
                subtitle={match.team_one + " " + match.score + " " + match.team_two}
              >
                <img src={match.img_one} />
                <img src={match.img_two} />
              </GridTile>
            ))}
          </GridList>
        </MuiThemeProvider>
      </div>
    );
  }
}


export default App;
