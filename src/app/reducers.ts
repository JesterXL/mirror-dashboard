import { IAppState }  from './IAppState';
import * as _ from "lodash";
// import { combineReducers } from 'redux';

// const rootReducer = combineReducers<IAppState>({
// 	weather
// });

// export default rootReducer;

import {GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR} from './actions';

export const defaultState = {
	loading: false,
	error: undefined,
	weather: undefined,
	timenow: undefined,
	news: undefined
};

export function rootReducer(state=defaultState, action)
{
	switch(action.type)
	{
		case GET_DATA:
			return Object.assign({}, state, { loading: true });

		case GET_DATA_SUCCESS:
			const weather = action.weather;
			const weatherDetails = getFirstWeatherDetails(weather);
			const weatherIconURL = getWeatherIconURL(_.get(weatherDetails, 'icon'));
			const weatherWithAddedIcon = Object.assign({}, weather, {
				weatherIconURL
			});
			const currentTime = new Date(action.timenow);
			console.log("currentTime:", currentTime);
			return Object.assign({}, state, {
				loading: false,
				error: undefined,
				timenow: currentTime,
				news: action.news,
				weather: weatherWithAddedIcon
			});

		case GET_DATA_ERROR:
			return Object.assign({}, state, {
				loading: false,
				error: action.error
			});

		default:
			return state;
	}
}

const getFirstWeatherDetails = (weather)=>
{
	return _.first(weather.weather);
};

const getWeatherIconURL = (weatherIconID)=>
{
	return `http://openweathermap.org/img/w/${weatherIconID}.png`;
};