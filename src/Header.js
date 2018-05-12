import React, { Component, Fragment } from "react";
import './Header.css';
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import { Link } from "react-router-dom";
import ronaldo from "./images/backgrounds/ronaldo.jpg";
import appbar from "./images/backgrounds/appbar_background.jpg";
import PlayerIcon from "material-ui-icons/People";
import HomeIcon from  "material-ui-icons/Home";
import RankIcon from  "material-ui-icons/Sort";
import ResultIcon from  "material-ui-icons/InsertInvitation";
import TrophyIcon from  "material-ui-icons/LooksOne";

class Header extends Component {

  render() {
    const styles = {
      ronaldo: {
        marginTop: "12vh"
      },
      appBar: {
        backgroundImage: `url(${appbar})`,
        backgroundPosition: 'bottom',
      },
      title: {
        fontFamily: 'fifa',
        fontSize: '2.7em'
      },
      item: {
        textAlign: 'left',
        marginTop: "3vh"
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
            <MenuItem style={styles.item} leftIcon={<HomeIcon className="muidocs-icon-home"/>} onClick={() => this.props.closingDrawer()}>Accueil</MenuItem>
          </Link>
          <Link to="/Players">
            <MenuItem style={styles.item} leftIcon={<PlayerIcon className="muidocs-icon-player"/>} onClick={() => this.props.closingDrawer()}>Les joueurs</MenuItem>
          </Link>
          <Link to="/Results">
            <MenuItem style={styles.item} leftIcon={<ResultIcon className="muidocs-icon-result"/>} onClick={() => this.props.closingDrawer()}>Résultats</MenuItem>
          </Link>
          <Link to="/Rankings">
            <MenuItem style={styles.item} leftIcon={<RankIcon className="muidocs-icon-rank"/>} onClick={() => this.props.closingDrawer()}>Classements</MenuItem>
          </Link>
          <MenuItem style={styles.item} leftIcon={<TrophyIcon className="muidocs-icon-trophy"/>} onClick={() => this.props.closingDrawer()}>Trophées</MenuItem>
          <img src={ronaldo} style={styles.ronaldo} alt="ronaldo"/>
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
