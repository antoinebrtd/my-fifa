import React, { Component } from "react";
import { FontIcon, RaisedButton } from "material-ui";
import PeopleIcon from "material-ui-icons/People";

class Home extends Component {
  render() {
    return (
      <div>
        <RaisedButton
          label="Nouveau Match"
          icon={<PeopleIcon className="muidocs-icon-people" />}
        />
      </div>
    );
  }
}

export default Home;
