import { combineReducers } from 'redux';

import movesReducer from './moves';
import timerReducer from './timer'

const rootReducer = combineReducers({
    movesReducer,
    timerReducer
});

export default rootReducer;