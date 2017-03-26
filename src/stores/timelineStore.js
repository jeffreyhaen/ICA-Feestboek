import { createStore } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../reducers';

const timelineStore = createStore(
    allReducers,
    applyMiddleware(thunk)
);

export default timelineStore;