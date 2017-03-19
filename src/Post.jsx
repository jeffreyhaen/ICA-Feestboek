import React, { Component } from 'react';
import Comment from './Comment.jsx';

class Post extends Component {

    onLike(state) {
        // set like according to state (true / false)
    }

    onPostComment(event)
    {
        event.preventDefault();
        
        // post comment and reload component
    }

    render() {
        return (
            <div>
                <hr />
                <h4>{this.props.post.title}</h4>
                <p>
                    {this.props.post.description}
                    <br />
                    <span style={{ fontSize: 10 }}>By: {this.props.post.author}</span>{" | "}
                    <span style={{ fontSize: 10 }}>Likes: {this.props.post.likes.length}</span>{" | "}
                    <span style={{ fontSize: 10 }} onClick={this.onLike.bind(true)}>Like</span>
                </p>
                <div>
                    {this.props.post.comments.map(function (item, i) {
                        return <Comment comment={item} key={i} />;
                    })}
                </div>
                <div>
                    <form name="comment" onSubmit={this.onPostComment.bind(this)}>
                        <textarea name="txtComment" />
                        <div>
                            <input type="submit" value="Plaats" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Post;