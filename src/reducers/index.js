import { combineReducers } from 'redux';

import PostReducer from './post';

const allReducers = combineReducers({
    posts: PostReducer
});

export default allReducers;