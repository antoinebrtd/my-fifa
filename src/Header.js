import React, { Component, Fragment } from "react";
import './Header.css';
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import { Link } from "react-router-dom";
import ronaldo from "./images/backgrounds/ronaldo.jpg";
import appbar from "./images/backgrounds/appbar_background.jpg";

class Header extends Component {

  render() {
    const styles = {
      drawer: {
        backgroundImage: `url(${ronaldo})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      },
      appBar: {
        backgroundImage: `url(${appbar})`,
        backgroundPosition: 'bottom',
      },
      title: {
        fontFamily: 'fifa',
        fontSize: '2.7em'
      }
    };

    return (
      <Fragment>
        <Drawer
          style={styles.drawer}
          docked={false}
          open={this.props.open}
          onRequestChange={() => this.props.closingDrawer()}
        >
          <Link to="/">
            <MenuItem onClick={() => this.props.closingDrawer()}>Accueil</MenuItem>
          </Link>
          <Link to="/Players">
            <MenuItem onClick={() => this.props.closingDrawer()}>Les joueurs</MenuItem>
          </Link>
          <Link to="/Results">
            <MenuItem onClick={() => this.props.closingDrawer()}>Résultats</MenuItem>
          </Link>
          <Link to="/Rankings">
            <MenuItem onClick={() => this.props.closingDrawer()}>Classements</MenuItem>
          </Link>
          <MenuItem onClick={() => this.props.closingDrawer()}>Trophées individuels</MenuItem>
        </Drawer>
        <AppBar
          style={styles.appBar}
          titleStyle={styles.title}
          title="Resultats FiFa 18 Chambre 4B309"
          onLeftIconButtonClick={() => this.props.openingDrawer()}
        />
      </Fragment>
    );
  }
}

export default Header;
