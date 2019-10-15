import { FetchActions } from "../actions/";
import { put, call } from "redux-saga/effects";
import axios from 'axios';
import httpRequest from './api'

export function* getApiData(action) {
    let response = yield call(httpRequest.getMethord);
    console.log(response)
    if(response.status == 200){
        yield put({ type: FetchActions.REQUEST_API_DATA_SUCCESSS, payload: response.data.results[0] })
    }
}
