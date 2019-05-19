import { combineReducers } from 'redux';

import movesReducer from './moves';
import timerReducer from './timer'

const rootReducer = combineReducers({
    moves: movesReducer,
    timer: timerReducer
});

export default rootReducer;