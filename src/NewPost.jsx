import React, { Component } from 'react';

class NewPost extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
        }
    }

    onChangeTitleHandler(event) {
        this.setState({title: event.target.value});
    }

    onChangeDescriptionHandler(event) {
        this.setState({description: event.target.value});
    }

    // TODO: Post request to server.
    submitHandler(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>New Post</h2>
                <div>
                    <form onSubmit={this.submitHandler.bind(this)}>
                        <p>Title:</p>
                        <input type="text" value={this.state.title} onChange={this.onChangeTitleHandler.bind(this)} />

                        <p>Description:</p>
                        <input type="text" value={this.state.description} onChange={this.onChangeDescriptionHandler.bind(this)} />

                        <hr/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default NewPost;