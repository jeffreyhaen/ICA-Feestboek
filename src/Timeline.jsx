import React, { Component } from 'react';

//import Post from './Post.jsx';
import PostContainer from './containers/post-container'

class Timeline extends Component {

    // TODO: Implement json request from server.
    getPosts() {
        return [
            {
                author: "Jeffrey",
                title: "Titel (1)",
                description: "Dit is een test bericht (1).",
                likes: ["Jevgeni"] /* userId */,
                comments: [
                    {
                        user: "Jevgeni",
                        message: "Goed verhaal",
                        datetime: "3-19-2017 17:00"
                    }
                ]
            },
            {
                author: "Jevgeni",
                title: "Titel (2)",
                description: "Dit is een test bericht (2).",
                likes: ["Jevgeni", "Jeffrey"] /* userId */,
                comments: [
                    {
                        user: "Jevgeni",
                        message: "Goed ferhaal",
                        datetime: "3-19-2017 17:00"
                    },
                    {
                        user: "Jevgeni",
                        message: "verhaal*",
                        datetime: "3-19-2017 17:01"
                    },
                    {
                        user: "Jeffrey",
                        message: "Ik vind dit leuk",
                        datetime: "3-19-2017 17:05"
                    }
                ]
            },
        ];
    }

    render() {
        return (
            <div>
                <h2>Timeline</h2>
                {this.getPosts().map(function(item, i) {
                    return <PostContainer post={item} key={i} />;
                })}
            </div>
        );
    }
}

export default Timeline;
