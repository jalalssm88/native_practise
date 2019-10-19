import { all, takeEvery } from 'redux-saga/effects';
import { getApiData } from "./userSaga";
import {getWeather} from './weatherSaga'
import { FetchActions, WeatherActions } from '../actions';

export function* rootSaga() {
    yield all([
        takeEvery(FetchActions.REQUEST_API_DATA , getApiData),
        takeEvery(WeatherActions.REQUEST_WEATHER_DATA, getWeather)
    ]);
};