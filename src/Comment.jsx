import React, { Component } from 'react';

class Comment extends Component {

    render() {
        return (
            /* {this.props.post.author} */
            <div>
           <p style={{fontSize: 10}}>{this.props.comment.user} @ {this.props.comment.datetime}: {this.props.comment.message}</p>
           </div>
        );
    }
}

export default Comment;
