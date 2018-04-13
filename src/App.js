import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter, Route } from "react-router-dom";
import Players from "./Players";
import Home from "./Home";
import { MuiThemeProvider } from "material-ui/styles";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/Players" component={Players} />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
