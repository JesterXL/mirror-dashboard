import { IAppState }  from './IAppState';
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
			return Object.assign({}, state, {
				loading: false,
				error: undefined,
				timenow: new Date(action.timenow),
				news: action.news,
				weather: action.weather
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
