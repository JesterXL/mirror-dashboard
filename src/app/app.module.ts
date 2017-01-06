import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import rootReducer from './reducers';
import { IAppState }  from './IAppState';
import { rootSaga } from './sagas';
import createSagaMiddleware from 'redux-saga';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';

const createLogger = require('redux-logger');
const sagaMiddleware 	= createSagaMiddleware();

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    NgReduxModule
  ],
  providers: [DevToolsExtension],
  bootstrap: [AppComponent]
})
export class AppModule {
   constructor(ngRedux: NgRedux<IAppState>, http:Http) {
    ngRedux.configureStore(rootReducer, {}, [ createLogger(), sagaMiddleware ]);
    const myThing:any = rootSaga;
		const rootSagaResult = sagaMiddleware.run(myThing);
		rootSagaResult.done.catch((err)=>
		{
			console.log("Error in Sagas", err);
		});
    setTimeout(()=>
    {
      console.log("Manual dispatch");
      ngRedux.dispatch({type: 'GET_WEATHER', http});
   }, 3 * 1000);
  }
}


// api.openweathermap.org/data/2.5/weather?q=Mechanicsville,va&units=imperial&APPID=ca491ee18a95d401ffa16f0617e57069
