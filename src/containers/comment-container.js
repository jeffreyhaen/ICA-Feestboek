import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onCommentAdd } from '../actions/on-comment'

class CommentContainer extends React.Component {
    render() {
        return (
            <div>
                {this.props.comments.map(function (item, i) {
                    return (
                        <div key={i}>
                            <p style={{ fontSize: 10 }}>{item.user} @ {item.datetime}: {item.message}</p>
                        </div>)
                })}
                <form name="comment" onSubmit={(e) => { 
                    e.preventDefault();
                    this.props.onCommentAdd(
                        this.props.comments, 
                        { user: "Kuzu" /* currently logged in user */, datetime: new Date().toLocaleString(), message: e.target.txtComment.value })
                    }
                    }>
                    <textarea name="txtComment" />
                    <div>
                        <input type="submit" value="Plaats" />
                    </div>
                </form>
            </div>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ onCommentAdd: onCommentAdd }, dispatch);
}

function mapStateToProps(state, props) {
                
    console.log("COMMENT MSTP STATE:")
    console.log(state);
    console.log("-----");

    return  {
        comments: state.comments ? state.comments : props.comments
    };
}


export default connect(mapStateToProps, matchDispatchToProps)(CommentContainer);