import React, {Link} from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import App from './App';
import Timeline from './Timeline';
import Profile from './Profile';
import AddPost from './add_post';
import Login from './Login';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
          <Route path="/timeline" component={Timeline} />
          <Route path="/profile/:userId" component={Profile} />
          <Route path="/addPost" component={AddPost} />
      </Route>
  </Router>,
  document.getElementById('root')
);
