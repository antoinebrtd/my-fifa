import React, { Component } from "react";
import { Tabs, Tab, Card, CardMedia, CardTitle, CardText, CardActions, FlatButton, GridList, GridTile } from "material-ui";
import SwipeableViews from 'react-swipeable-views';

class Players extends Component {
  state = {
    slideIndex: 0,
  };

  handleChange = (value) => {
    this.setState({slideIndex: value});
  };

  render() {
    const styles = {
      tabs: {
        width: "90vw",
        margin: "auto"
      },
      slide: {
        width: "90vw",
        height: "80vh",
        margin: "auto"
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
        //img_one: liv,
        //img_two: mancity
      },
      {
        id: "2",
        player_one: "Beber",
        player_two: "Tutur",
        team_one: "RMA",
        team_two: "FCB",
        score: "3 - 4",
        //img_one: rma,
        //img_two: fcb
      },
      {
        id: "3",
        player_one: "Borcky",
        player_two: "Tutur",
        team_one: "Arsenal",
        team_two: "Juv",
        score: "3 - 2",
        //img_one: arsn,
        //img_two: juv
      },
      {
        id: "4",
        player_one: "Borcky",
        player_two: "Beber",
        team_one: "ManCity",
        team_two: "Juv",
        score: "3 - 2",
        //img_one: mancity,
        //img_two: juv
      },
      {
        id: "5",
        player_one: "Tutur",
        player_two: "Beber",
        team_one: "RMA",
        team_two: "Juv",
        score: "3 - 2",
        //img_one: rma,
        //img_two: juv
      },
      {
        id: "6",
        player_one: "Borcky",
        player_two: "Tutur",
        team_one: "ManCity",
        team_two: "Liv",
        score: "3 - 2",
        //img_one: mancity,
        //img_two: liv
      }
    ];

    function displayRecent(match) {
      return <div><GridTile key={match.id} title={match.player_one + " " + "-" + " " + match.player_two}></GridTile></div>;
    }

    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          style={styles.tabs}
        >
          <Tab label="Borcky" value={0} />
          <Tab label="Tutur" value={1} />
          <Tab label="Beber" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
          style={styles.slide}
        >
          <div>
            <Card>
              <CardMedia>
              </CardMedia>
              <CardTitle title="Le diplodocus" />
              <CardText>
                Ce grand dinosaure sorti tout droit du jurassique saura jouer de sa taille et de son long cou
                pour faire planer une menace constante sur les défenses. Sa chevelure blonde toujours coiffée 
                impeccablement lui confère une adhérence toute partciulière sur le cuir: tête piquée, plongeante ou en lucarne, 
                il placera le ballon où il le souhaite sur le corner gagnant à la 93ème minute en finale de Ligue Des Champions. 
                Avec lui, pas de doutes: le danger est aérien.
              </CardText>
              <CardActions>
                <FlatButton label="Voir l'armoire à trophées" />
              </CardActions>
              <div>
                <GridList>
                  {matchesData.map((match) => (
                    <If 
                      condition={match.player_one==="Borcky" || match.player_to==="Borcky"}
                      then={displayRecent(match)}
                    />
                  ))}
                </GridList>
              </div>
            </Card>
          </div>
          <div>
          <Card>
              <CardMedia>
              </CardMedia>
              <CardTitle title="La Terreur du Vésinet" />
              <CardText>
                Cet enfant turbulent du 78110 mettra à profit son arrogance pour vous déstabiliser dès le début du match. 
                Lancé à pleine vitesse à 11km/h, il saura user de ses épaules d'une envergure de 3m50 pour se frayer
                un chemin de force entre les défenseurs centraux. Même Ramos et Pepe ne sortiraient pas indemnes d'un tel combat.
                Un conseil, ne lui racontez pas votre life, sinon gare aux coups de coude sous le menton,
                il n'hésitera pas à vous casser le front.
              </CardText>
              <CardActions>
                <FlatButton label="Voir l'armoire à trophées" />
              </CardActions>
            </Card>
          </div>
          <div>
          <Card>
              <CardMedia>
              </CardMedia>
              <CardTitle title="Jean Beauf" />
              <CardText>
                Ce tonton blagueur venu tout droit du camping en claquettes chaussettes vous distraira de son humour 
                bien trempé, pour mieux vous porter l'estocade. Grâce à son sommeil réparateur, il sera toujours prêt pour les 
                grandes échéances, mais sa susceptibilité lui joue souvent des tours, à tel point qu'il a décidé de raccrocher les crampons
                après une légendaire humiliation 0-4. Il prépare son grand retour, alors attention aux lancers de manettes.
              </CardText>
              <CardActions>
                <FlatButton label="Voir l'armoire à trophées" />
              </CardActions>
            </Card>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default Players;
