import { combineReducers } from 'redux';

import movesReducer from './moves';
import oldShuffleMoves from './shuffle';
import timerReducer from './timer';

const rootReducer = combineReducers({
    moves: movesReducer,
    oldShuffleMoves: oldShuffleMoves,
    timer: timerReducer,
});

export default rootReducer;