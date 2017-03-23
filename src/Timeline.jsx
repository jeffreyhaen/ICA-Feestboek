import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostContainer from './containers/post-container'

class Timeline extends Component {
    render() {
        return (
            <div>
                <h2>Timeline</h2>
                {this.props.posts.map(function(item, i) {
                    return (<div key={`${i}_block`}>
                        <PostContainer post={item} key={`${i}_post`} />
                    </div>)
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.post,
        posts: state.posts,
    };
}

export default connect(mapStateToProps)(Timeline);
