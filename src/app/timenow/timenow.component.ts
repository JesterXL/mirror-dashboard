import { Component } from '@angular/core';
import { Injectable }     from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
const moment = require('moment');

const formatTime = (state)=> moment(state.timenow).format('h:mm:ss a');
const formatDate = (state)=> moment(state.timenow).format('MMM Do');

@Component({
	selector: 'jxl-timenow',
	templateUrl: './timenow.component.html'
})

@Injectable()
export class TimeNowComponent
{
	@select(formatTime) currentTime:Observable<any>;
	@select(formatDate) currentDate:Observable<any>;
}

