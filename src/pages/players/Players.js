import React, { Component } from "react";
import "./Players.css";
import {
  Tabs,
  Tab,
  Card,
  CardHeader,
  CardActions,
  CardText,
  FlatButton
} from "material-ui";
import SwipeableViews from "react-swipeable-views";

class Players extends Component {
  render() {
    const styles = {
      slide: {
        padding: 10
      }
    };

    return (
      <div className="description_container">
        <Tabs
          value={this.props.display}
          onChange={value => this.props.handleDisplay(value)}
        >
          <Tab label="Borcky" value={0} />
          <Tab label="Tutur" value={1} />
          <Tab label="Beber" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.props.display}
          onChangeIndex={value => this.props.handleDisplay(value)}
        >
          <div style={styles.slide}>
            <Card>
              <CardHeader
                title="Le diplodocus"
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardActions>
                <FlatButton label="Voir les trophées" />
                <FlatButton label="Voir les résultats" />
              </CardActions>
              <CardText expandable={true}>
                Ce dinosaure sorti tout droit du Jurassique saura jouer de sa
                taille pour faire planer une menace constante sur les défenses
                adverses. Son long cou d'1m86 et sa chevelure blonde toujours
                impeccablement coiffée lui confèrent une adhérence toute
                paticulière sur le cuir. Il fera parler sa détente pour placer
                la tête victorieuse en finale de la Ligue Des Champions à la
                93ème minute. Avec lui pas de doutes, le danger est aérien.
              </CardText>
            </Card>
          </div>
          <div style={styles.slide}>
            <Card>
              <CardHeader
                title="La terreur du Vésinet"
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardActions>
                <FlatButton label="Voir les trophées" />
                <FlatButton label="Voir les résultats" />
              </CardActions>
              <CardText expandable={true}>
                Cet enfant turbulent du 78110 mettra à profit son arrogance pour
                vous faire sortir de votre match dès la 5ème minute. Lancé à
                pleine vitesse à 11kmm/h, il saura jouer de ses épaules larges
                de 3m50 pour se frayer un chemin au sein des défenseurs
                adverses. Même Ramos et Pepe ne sortiraient pas indemnes d'un
                tel duel. Ne lui racontez pas votre life, sinon gare aux coups
                de coude sous le menton: il n'hésitera pas à vous casser le
                front.
              </CardText>
            </Card>
          </div>
          <div style={styles.slide}>
            <Card>
              <CardHeader
                title="Jean Beauf"
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardActions>
                <FlatButton label="Voir les trophées" />
                <FlatButton label="Voir les résultats" />
              </CardActions>
              <CardText expandable={true}>
                Ce tonton blagueur se servira de son humour bien trempé pour
                vous déconcentrer dans les moments cruciaux. Son sommeil
                réparateur lui permettra d'être toujours au top dans les grands
                matches, mais il est souvent trahi par sa susceptibilité, à tel
                point qu'il a décidé de raccrocher les crampons après avoir subi
                une véritable humiliation 0-4. Mais on me dit dans l'oreillette
                qu'il prépare son retour, on le verra bientôt de nouveau fouler
                les pelouses en tong chaussettes.
              </CardText>
            </Card>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default Players;
