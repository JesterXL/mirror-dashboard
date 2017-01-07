import { NgModule } from '@angular/core';
import { NewsComponent } from './news.component';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		NewsComponent
	],
    imports: [
        MaterialModule,
        CommonModule
    ],
    exports: [
        NewsComponent
    ]
})
export class NewsModule { }
