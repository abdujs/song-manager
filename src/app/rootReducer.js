import { combineReducers } from 'redux'; 
import songsReducer from '../features/songs/songsSlice';

const rootReducer = combineReducers({
    songs: songsReducer,
});

export default rootReducer;