import { all, takeEvery } from 'redux-saga/effects';
import { getApiData } from "./userSaga";
import { FetchActions } from '../actions';

export function* rootSaga() {
    yield all([
        takeEvery(FetchActions.REQUEST_API_DATA , getApiData),
    ]);
};