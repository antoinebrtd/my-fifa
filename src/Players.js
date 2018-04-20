import React, { Component } from "react";
import { Tabs, Tab } from "material-ui";
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
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
      slide: {
        padding: 10,
      },
    };  

    return (
      <div>
        <h1>Les Joueurs</h1>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Borcky" value={0} />
          <Tab label="Tutur" value={1} />
          <Tab label="Beber" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <h2 style={styles.headline}>Le Diplodocus</h2>
            <p>Ce grand dinosaure sorti tout droit du jurassique saura jouer de sa taille et de son long cou
               pour faire planer une menace constante sur les défenses. Sa chevelure blonde toujours coiffée 
               impeccablement lui confère une adhérence toute partciulière sur le cuir: tête piquée, plongeante ou en lucarne, 
               il placera le ballon où il le souhaite sur le corner gagnant à la 93ème minute en finale de Ligue Des Champions. 
               Avec lui, pas de doutes: le danger est aérien.
            </p>
          </div>
          <div>
            <h2 style={styles.headline}>La Terreur du Vésinet</h2>
            <p>Cet enfant turbulent du 78110 mettra à profit son arrogance pour vous déstabiliser dès le début du match. 
               Lancé à pleine vitesse à 11km/h, il saura user de ses épaules d'une envergure de 3m50 pour se frayer
               un chemin de force entre les défenseurs centraux. Même Ramos et Pepe ne sortiraient pas indemnes d'un tel combat.
               Un conseil, ne lui racontez pas votre life, sinon gare aux coups de coude sous le menton,
               il n'hésitera pas à vous casser le front.
            </p>
          </div>
          <div>
            <h2 style={styles.headline}>Jean Beauf</h2>
            <p>Ce tonton blagueur venu tout droit du camping en claquettes chaussettes vous distraira de son humour 
               bien trempé, pour mieux vous porter l'estocade. Grâce à son sommeil réparateur, il sera toujours prêt pour les 
               grandes échéances, mais sa susceptibilité lui joue souvent des tours, à tel point qu'il a décidé de raccrocher les crampons
               il y a 5 mois après une légendaire humiliation 0-4. Il prépare dans l'ombre son grand retour, alors attention aux lancers de manettes.
            </p>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default Players;
