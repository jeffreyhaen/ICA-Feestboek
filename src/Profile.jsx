import React, { Component } from 'react';

class Profile extends Component {

    render() {
        return (
           <div>You are viewing the feestboek profile of: {this.props.params.userId}</div>
        );
    }
}

export default Profile;
