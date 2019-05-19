import { combineReducers } from 'redux';

import movesReducer from './moves';
import timerReducer from './timer'

const rootReducer = combineReducers({
    moves: movesReducer,
    time: timerReducer
});

export default rootReducer;