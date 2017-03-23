import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onPostLike } from '../actions/on-post'

import CommentContainer from './comment-container'


class PostContainer extends Component {

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
                    <span style={{ fontSize: 10 }} onClick={() => { 
                        this.props.onPostLike(this.props.post, { name: "Kuzu" /* currently logged in user */ })}}>Like</span>
                </p>
                <CommentContainer comments={this.props.post.comments}  />
            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ onPostLike: onPostLike }, dispatch);
}

function mapStateToProps(state, props) {
    return  {
        post: (state.post && state.post.id === props.post.id) ? state.post : props.post,
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(PostContainer);
