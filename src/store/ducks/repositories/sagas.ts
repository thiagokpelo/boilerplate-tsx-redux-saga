import { call, put } from 'redux-saga/effects';
import api from 'services/api';
import { loadSuccess, loadFailure } from 'store/ducks/repositories/actions';

export function* load() {
  try {
    const response = yield call(api.get, 'users/thiagokpelo/repos');
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
