import { Component } from '@angular/core';
import { Injectable }     from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'jxl-weather',
	templateUrl: './weather.component.html'
})

@Injectable()
export class WeatherComponent
{
	@select(['weather', 'weatherData', 'main', 'temp']) tempature:Observable<any>;
}

