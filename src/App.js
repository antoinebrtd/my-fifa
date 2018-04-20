import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Bottom_nav from './Bottom_nav';
import { MuiThemeProvider } from 'material-ui/styles';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header/>
          <Bottom_nav/>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default App;
