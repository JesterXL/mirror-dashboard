import {GET_WEATHER, GET_WEATHER_SUCCESS, GET_WEATHER_ERROR} from '../actions';

export const defaultWeatherState = {
	loading: false,
	error: undefined,
	weather: undefined
};

export function weather(state=defaultWeatherState, action)
{
	switch(action.type)
	{
		case GET_WEATHER:
			return Object.assign({}, state, { loading: true });

		case GET_WEATHER_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				error: undefined,
				weatherData: action.weatherData
			});

		case GET_WEATHER_ERROR:
			return Object.assign({}, state, {
				loading: false,
				error: action.error
			});

		default:
			return state;
	}
}
