// http://www.timeapi.org/utc/now.json

import { NgModule } from '@angular/core';
import {TimeNowComponent} from './timenow.component';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		TimeNowComponent
	],
    imports: [
        MaterialModule,
        CommonModule
    ],
    exports: [
        TimeNowComponent
    ]
})
export class TimeNowModule { }
