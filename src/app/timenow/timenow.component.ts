import { Component } from '@angular/core';
import { Injectable }     from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'jxl-timenow',
	templateUrl: './timenow.component.html'
})

@Injectable()
export class TimeNowComponent
{
	@select(['timenow']) time:Observable<any>;
}

