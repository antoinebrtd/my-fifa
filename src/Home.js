import React, { Component } from "react";
import { FontIcon, RaisedButton } from "material-ui";

class Home extends Component {
  render() {
    return (
      <div>
        <RaisedButton
          label="Nouveau Match"
          icon={<FontIcon className="muidocs-icon-people" />}
        />
      </div>
    );
  }
}

export default Home;
