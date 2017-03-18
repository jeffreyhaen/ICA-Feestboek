import React, { Component } from 'react';

class Post extends Component {

    render() {
        return (
            <div>
                <hr/>
                <h4>{this.props.post.title}</h4>
                <p>
                    {this.props.post.description}
                    <br/>
                    <span style={{fontSize: 10}}>By: {this.props.post.author}</span>
                </p>
            </div>
        );
    }
}

export default Post;