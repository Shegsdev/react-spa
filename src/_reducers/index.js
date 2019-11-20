import { combineReducers } from 'redux';
import movieReducer from './movie-reducer';
import errorReducer from './error-reducer';

export default combineReducers({
    movies: movieReducer,
    error: errorReducer,
});
