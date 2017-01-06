import { weather } from './weather/weather.reducer';
import { IAppState }  from './IAppState';
import { combineReducers } from 'redux';

const rootReducer = combineReducers<IAppState>({
	weather
});

export default rootReducer;
