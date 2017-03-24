import { combineReducers } from 'redux';

import PostsHardcoded from './posts-hardcoded';

import PostReducer from './posts-reducer';
import CommentReducer from './comments-reducer';
import AuthenticationReducer from './authenticate-reducer';

const allReducers = combineReducers({
    user: AuthenticationReducer,

    posts: PostReducer,
    comments: CommentReducer,
});

export default allReducers;