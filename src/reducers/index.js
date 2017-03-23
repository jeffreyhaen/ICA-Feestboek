import { combineReducers } from 'redux';

import PostsHardcoded from './posts-hardcoded';

import PostReducer from './posts-reducer';
import CommentReducer from './comments-reducer';

const allReducers = combineReducers({
    posts: PostsHardcoded,

    post: PostReducer,
    comments: CommentReducer,
});

export default allReducers;