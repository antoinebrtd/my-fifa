import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Bottom_nav from './Bottom_nav';
import { BrowserRouter, Route } from "react-router-dom";
import Players from "./Players";
import Home from "./Home";
import Results from "./Results";
import Rankings from "./Rankings";
import Match from "./Match";
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
            <Route path="/Results" component={Results} />
            <Route path="/Rankings" component={Rankings} />
            <Route path="/Match" component={Match} />
            <Bottom_nav/>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
