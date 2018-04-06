import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import Color from './Color';
import Header from './Header';

class App extends Component {
  state = {
    color: 'red',
  }
  
  changeColor () {
    this.state.color === 'red' ? this.setState({color: 'green'}) : this.setState({color: 'red'});
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Header />
        </MuiThemeProvider>
        <button className={this.state.color === 'red' ? 'buttonRed' : 'buttonGreen'} onClick={() => this.changeColor()}>Cliquez moi</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Color color={this.state.color} />
      </div>
    );
  }
}


export default App;

