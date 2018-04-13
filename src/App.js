import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import MuiThemeProvider from "../node_modules/material-ui/styles/MuiThemeProvider";
import RaisedButton from "../node_modules/material-ui/RaisedButton";
import FontIcon from "../node_modules/material-ui/FontIcon";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <RaisedButton
            label="Nouveau Match"
            icon={<FontIcon className="muidocs-icon-people" />}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
