import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Color from './Color'

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
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

