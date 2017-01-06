import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import {SagaIterator} from "redux-saga";
import { Http } from '@angular/http';
import {GET_WEATHER, GET_WEATHER_SUCCESS, GET_WEATHER_ERROR} from '../actions';
import 'rxjs/add/operator/toPromise';
import {getWeatherService} from './getWeather.service';

export function *getWeather(action):SagaIterator
{
	try
	{
		const weather = yield call(weatherQuery, action.http);
		yield put({type: GET_WEATHER_SUCCESS, weather});
	}
	catch(error)
	{
		console.error("login failed:", error);
		yield put({type: GET_WEATHER_ERROR, error});
	}
}

export function weatherQuery(http:Http)
{
	return getWeatherService(http);
}

export function *watchWeather()
{
	yield* takeLatest(GET_WEATHER, getWeather);
}


