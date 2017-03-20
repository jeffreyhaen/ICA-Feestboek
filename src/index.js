import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Timeline from './Timeline';
import Profile from './Profile';
import NewPost from './NewPost';
import Login from './Login';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Timeline} />
            <Route path="/timeline" component={Timeline} />
            <Route path="/profile/:userId" component={Profile} />
            <Route path="/newPost" component={NewPost} />
        </Route>
    </Router>,
  document.getElementById('root')
);
