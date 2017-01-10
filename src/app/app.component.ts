import { Component } from '@angular/core';
import { IAppState }  from './IAppState';
import { Http } from '@angular/http';
import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ngRedux: NgRedux<IAppState>, private http:Http)
  {

  }

  refresh()
  {
    this.ngRedux.dispatch({type: 'GET_DATA', http: this.http});
  }
}
