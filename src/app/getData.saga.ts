import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import {SagaIterator} from "redux-saga";
import { Http } from '@angular/http';
import {GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR} from './actions';
import 'rxjs/add/operator/toPromise';
import {getDataService} from './getData.service';

export function *getDataSaga(action):SagaIterator
{
	try
	{
		const data = yield call(query, action.http);
		yield put({type: GET_DATA_SUCCESS, timenow: data.time, news: data.news, weather: data.weather});
	}
	catch(error)
	{
		yield put({type: GET_DATA_ERROR, error});
	}
}
export function query(http:Http)
{
	return getDataService(http);
}

export function *watchGetData()
{
	yield* takeLatest(GET_DATA, getDataSaga);
}
