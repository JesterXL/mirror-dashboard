import { Component } from '@angular/core';
import { Injectable }     from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'jxl-news',
	templateUrl: './news.component.html'
})

@Injectable()
export class NewsComponent
{
	@select(['news', 'articles']) news:Observable<any>;
}

