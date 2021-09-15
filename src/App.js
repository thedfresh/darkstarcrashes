import React, { Component } from 'react';
import weup from './logo.svg';
import logo from './back-up.jpg';
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
          built locally, pushed to github and digitalocean
        </p>
        <div><img src={weup} alt="we back up" /></div>
      </div>
    );
  }
}

export default App;
