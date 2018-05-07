import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Provider from "react-redux";
import createStore from "redux";
import { MuiThemeProvider } from "material-ui/styles";

import "./App.css";
import rootReducer from "./reducers"
import Header from "./Header";
import BottomNav from './BottomNav';
import Players from "./Players";
import Home from "./Home";
import Results from "./Results";
import Rankings from "./Rankings";
import Match from "./Match";

const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MuiThemeProvider>
            <div className="App">
              <Header />
              <Route exact path="/" component={Home} />
              <Route path="/Players" component={Players} />
              <Route path="/Results" component={Results} />
              <Route path="/Rankings" component={Rankings} />
              <Route path="/Match" component={Match} />
              <BottomNav/>
            </div>
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
