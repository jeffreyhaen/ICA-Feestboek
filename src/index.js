import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import timelineStore from './stores/timelineStore';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Timeline from './Timeline';
import Profile from './Profile';
import NewPost from './NewPost';
import Login from './containers/login-container';

ReactDOM.render(
    <Provider store={timelineStore}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Timeline} />
                <Route path="/timeline" component={Timeline} />
                <Route path="/profile/:userId" component={Profile} />
                <Route path="/newPost" component={NewPost} />
                <Route path="/logout" component={Login} />
            </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);
