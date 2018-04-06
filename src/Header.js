import React, { Component } from 'react';
import AppBar from '../node_modules/material-ui/AppBar';
import Drawer from '../node_modules/material-ui/Drawer';
import MenuItem from '../node_modules/material-ui/MenuItem';

class Header extends Component {
    state = {
        showMenu: false,
    }

    displayMenu () {
        this.state.showMenu ? this.setState({showMenu: false}) : this.setState({showMenu: true});
    }

    handleClose () {
        this.setState({showMenu : false});
    }

    render() {
        return (
            <div>
                <Drawer 
                open={this.state.showMenu}
                onRequestChange={() => this.displayMenu()}>
                    <MenuItem onClick={() => this.handleClose()}>Accueil</MenuItem>
                    <MenuItem onClick={() => this.handleClose()}>Les joueurs</MenuItem>
                    <MenuItem onClick={() => this.handleClose()}>Résultats récents</MenuItem>
                    <MenuItem onClick={() => this.handleClose()}>Classements</MenuItem>
                    <MenuItem onClick={() => this.handleClose()}>Trophées individuels</MenuItem>
                </Drawer>
                <AppBar
                    title="Résultats FiFa Chambre 4B309" 
                    onLeftIconButtonClick={() => this.displayMenu()}
                    className={this.state.showMenu ? 'displayedMenu' : 'hiddenMenu'}
                />
            </div>
        );
    }
} 

export default Header;
