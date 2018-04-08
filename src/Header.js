import React, { Component } from 'react';
import AppBar from '../node_modules/material-ui/AppBar';
import Drawer from '../node_modules/material-ui/Drawer';
import MenuItem from '../node_modules/material-ui/MenuItem';

class Header extends Component {
    state = {
        open: false,
    }

    displayMenu () {
        this.setState({open: !this.state.open});
    }

    handleClose () {
        this.setState({open: false});
    }

    render() {
        return (
            <div>
                <Drawer 
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}>
                    <MenuItem onClick={() => this.handleClose()}>Accueil</MenuItem>
                    <MenuItem onClick={() => this.handleClose()}>Les joueurs</MenuItem>
                    <MenuItem onClick={() => this.handleClose()}>Résultats</MenuItem>
                    <MenuItem onClick={() => this.handleClose()}>Classements</MenuItem>
                    <MenuItem onClick={() => this.handleClose()}>Trophées individuels</MenuItem>
                </Drawer>
                <AppBar
                    title="Résultats FiFa Chambre 4B309" 
                    onLeftIconButtonClick={() => this.displayMenu()}
                />
            </div>
        );
    }
} 

export default Header;
