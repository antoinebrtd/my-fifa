import React, { Component, Fragment } from "react";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    open: false
  };

  displayMenu() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <Fragment>
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <Link to="/">
            <MenuItem onClick={() => this.handleClose()}>Accueil</MenuItem>
          </Link>
          <Link to="/Players">
            <MenuItem onClick={() => this.handleClose()}>Les joueurs</MenuItem>
          </Link>
          <MenuItem onClick={() => this.handleClose()}>Résultats</MenuItem>
          <MenuItem onClick={() => this.handleClose()}>Classements</MenuItem>
          <MenuItem onClick={() => this.handleClose()}>
            Trophées individuels
          </MenuItem>
        </Drawer>
        <AppBar
          title="Résultats FiFa Chambre 4B309"
          onLeftIconButtonClick={() => this.displayMenu()}
        />
      </Fragment>
    );
  }
}

export default Header;
