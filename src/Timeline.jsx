import React, { Component } from 'react';

import Post from './Post.jsx';

class Timeline extends Component {

    // TODO: Implement json request from server.
    getPosts() {
        return [
            {
                author: "Jeffrey",
                title: "Titel (1)",
                description: "Dit is een test bericht (1).",
            },
            {
                author: "Jevgeni",
                title: "Titel (2)",
                description: "Dit is een test bericht (2).",
            },
        ];
    }

    render() {
        return (
            <div>
                <h2>Timeline</h2>
                {this.getPosts().map(function(item, i) {
                    return <Post post={item} key={i} />;
                })}
            </div>
        );
    }
}

export default Timeline;
