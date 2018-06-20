import React, { Component } from 'react';
import {Paper, BottomNavigation, BottomNavigationItem} from 'material-ui';
import ConfirmationNumberIcon from 'material-ui-icons/ConfirmationNumber';
import LanguageIcon from 'material-ui-icons/Language';
import EmailIcon from 'material-ui-icons/Email';

class Bottom_nav extends Component {

    render() {
        return (
        <Paper zDepth={1}>
            <BottomNavigation selectedIndex={this.props.display}>
            <BottomNavigationItem
                label="Billetterie"
                icon={<ConfirmationNumberIcon className="muidocs-icon-confirmationnumber" />}
                onClick={() => this.props.displayingTicket()}
            />
            <BottomNavigationItem
                label="Langues"
                icon={<LanguageIcon className="muidocs-icon-language" />}
                onClick={() => this.props.displayingLanguage()}
            />
            <BottomNavigationItem
                label="Contact"
                icon={<EmailIcon className="muidocs-icon-email" />}
                onClick={() => this.props.displayingContact()}
            />
            </BottomNavigation>
        </Paper>
        );
    }
}


export default Bottom_nav;
