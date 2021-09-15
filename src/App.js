import React, { Component } from 'react';
import logo from './logo.svg';
import weup from './back-up.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">darkstarcrashes.com</h1>
        </header>
        <p className="App-intro">
          coming...well, not soon, but eventually, maybe
        </p>
        <div><img src={weup} alt="we back up" /></div>
      </div>
    );
  }
}

export default App;
