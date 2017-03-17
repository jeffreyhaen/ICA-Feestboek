import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './Login.jsx';

class App extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      user: undefined
    }
  }

  render() {
    if (this.state.user === undefined)
    {
        return (<Login  />)
    }
    else
    {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      );
    }
  }
}

export default App;
