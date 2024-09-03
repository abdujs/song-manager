import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchSongsRequest, fetchSongsSuccess, fetchSongsFailure } from './songsSlice';
import { fetchSongs } from './songsAPI';

function* fetchSongsSaga() {
    try {
        yield put(fetchSongsRequest());
        const songs = yield call(fetchSongs);
        yield put(fetchSongsSuccess(songs));
    } catch (error) {
        yield put(fetchSongsFailure(error.message));
    }
}

function* rootSaga() {
    yield takeEvery('songs/fetchSongsRequest', fetchSongsSaga);
}

export default rootSaga;