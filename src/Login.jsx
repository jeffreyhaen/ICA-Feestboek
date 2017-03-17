import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends Component {

    onLogin(event) {
        event.preventDefault();

        this.props.loginHandler(event.target.username.value);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Inlogscherm</h3>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={this.onLogin.bind(this)}>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Username" name="username" autofocus />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Wachtwoord" name="password" type="password" value="" />
                                </div>
                                <input type="submit" className="btn btn-lg btn-success btn-block" value="Inloggen" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
