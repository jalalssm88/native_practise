import { WeatherActions } from "../actions/";
import { put, call } from "redux-saga/effects";
import axios from 'axios';
import httpWeatherRequest from './weatherApi'

export function* getWeather(action) {
    let {payload} = action

    const response = yield call(httpWeatherRequest.getDatas,payload);
    console.log('fetched dadaaaaaaa', response )

    if(response.status == 200){
        yield put({ type: WeatherActions.REQUEST_WEATHER_DATA_SUCESS, payload: response.data})
    }
    
}
