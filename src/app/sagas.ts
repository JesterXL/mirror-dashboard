import { watchWeather } from './weather/weather.saga';

export function *rootSaga()
{
	yield [
		watchWeather()
	];
}
