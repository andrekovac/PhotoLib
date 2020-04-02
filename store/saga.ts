import { call, put, takeLatest } from "redux-saga/effects";

import { addPhotos, fetchError } from "./actionCreators/photos";
import { fetchPhotos } from '../api';

// worker Saga: will be fired on FETCH_START actions
function* fetchData() {
  try {
    const photos = yield call(fetchPhotos);
    yield put(addPhotos(photos));
  } catch (error) {
    yield put(fetchError(error));
  }
}

function* fetchSaga() {
  yield takeLatest("FETCH_START", fetchData);
}

export default fetchSaga;
