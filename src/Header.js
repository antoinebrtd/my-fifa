import React, { Component, Fragment } from "react";
import './Header.css';
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import { Link } from "react-router-dom";
import ronaldo from "./images/backgrounds/ronaldo.jpg";
import appbar from "./images/backgrounds/appbar_background.jpg";

class Header extends Component {
  static defaultProps = {
    open: false,
  };

  render() {
    const { open } = this.props;

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
          onRequestChange={() => this.props.closingModal()}
        >
          <Link to="/">
            <MenuItem onClick={() => this.props.closingModal()}>Accueil</MenuItem>
          </Link>
          <Link to="/Players">
            <MenuItem onClick={() => this.props.closingModal()}>Les joueurs</MenuItem>
          </Link>
          <Link to="/Results">
            <MenuItem onClick={() => this.props.closingModal()}>Résultats</MenuItem>
          </Link>
          <Link to="/Rankings">
            <MenuItem onClick={() => this.props.closingModal()}>Classements</MenuItem>
          </Link>
          <MenuItem onClick={() => this.props.closingModal()}>Trophées individuels</MenuItem>
        </Drawer>
        <AppBar
          style={styles.appBar}
          titleStyle={styles.title}
          title="Resultats FiFa 18 Chambre 4B309"
          onLeftIconButtonClick={() => this.props.openingModal()}
        />
      </Fragment>
    );
  }
}

export default Header;
