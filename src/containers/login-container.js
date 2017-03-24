import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onUserLogin, onUserLogout } from '../actions/on-authenticate';

class Login extends Component {

    render() {
        if (this.props.callback === undefined)
        {
            this.props.onUserLogout();
        }

        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Inlogscherm</h3>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                
                                this.props.onUserLogin(e.target.username.value);
                                this.props.callback();
                                }}>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Üzername" name="username" />
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

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        { 
            onUserLogin: onUserLogin,
            onUserLogout: onUserLogout, 
        }, dispatch);
}

function mapStateToProps(state, props) {
    return  {
        callback: props.callback
    };
}


export default connect(mapStateToProps, matchDispatchToProps)(Login);
