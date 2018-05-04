import React, { Component } from 'react';
import {Paper, BottomNavigation, BottomNavigationItem} from 'material-ui';
import ConfirmationNumberIcon from 'material-ui-icons/ConfirmationNumber';
import LanguageIcon from 'material-ui-icons/Language';
import EmailIcon from 'material-ui-icons/Email';

class Bottom_nav extends Component {
    state = {
        selectedIndex: "",
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
        return (
        <Paper zDepth={1}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
                label="Billetterie"
                icon={<ConfirmationNumberIcon className="muidocs-icon-confirmationnumber" />}
                onClick={() => this.select(0)}
            />
            <BottomNavigationItem
                label="Langues"
                icon={<LanguageIcon className="muidocs-icon-language" />}
                onClick={() => this.select(1)}
            />
            <BottomNavigationItem
                label="Contact"
                icon={<EmailIcon className="muidocs-icon-email" />}
                onClick={() => this.select(2)}
            />
            </BottomNavigation>
        </Paper>
        );
    }
}


export default Bottom_nav;
