import { watchGetData } from './getData.saga'

export function *rootSaga()
{
	yield [
		watchGetData()
	];
}
