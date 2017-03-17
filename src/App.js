import React, { Component } from 'react';
import { Link } from 'react-router';
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

  setLogin = (email) => {
    this.setState({user: email});
  }

  render() {
    if (this.state.user === undefined)
    {
        return (<Login loginHandler={this.setLogin} />)
    }
    else
    {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Feestboek {this.state.user}</h2>

            <Link to={`/profile/` + this.state.user} >Ik</Link> { '|' }
               <Link to={`/timeline`} >Timeline</Link> { '|' }
                  <Link to={`/logout`} >Log out</Link>
          </div>
          {this.props.children}
        </div>
      )
    }
  }
}

export default App;
