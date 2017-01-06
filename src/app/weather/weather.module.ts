import { NgModule } from '@angular/core';
import {WeatherComponent} from './weather.component';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		WeatherComponent
	],
    imports: [
        MaterialModule,
        CommonModule
    ],
    exports: [
        WeatherComponent
    ]
})
export class WeatherModule { }
