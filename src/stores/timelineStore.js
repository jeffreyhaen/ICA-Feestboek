import { createStore } from 'redux';
import allReducers from '../reducers';

const timelineStore = createStore(
    allReducers
);

export default timelineStore