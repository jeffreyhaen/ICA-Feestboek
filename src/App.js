import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

import timelineStore from './stores/timelineStore';
import Login from './containers/login-container';

class App extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      foo: 42
    }
  }

  callback() {
    this.setState({foo: 42});
   }

  render() {
    let user = timelineStore.getState().user.name;
    if (user === undefined)
    {
        return (<Login callback={this.callback.bind(this)} />)
    }
    else
    {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Feestboek {user}</h2>

            <Link to={"/profile/" + user}>Ik</Link>{" | "} 
            <Link to={"/timeline"}>Timeline</Link>{" | "} 
            <Link to={"/newPost"}>New</Link>{" | "} 
            <Link to={"/logout"}>Log out</Link>
          </div>
          <div>
            {this.props.children}
          </div>
        </div>
      )
    }
  }
}

export default App;
