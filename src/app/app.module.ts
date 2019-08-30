import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultipleMatTableTaskComponent } from './multiple-mat-table-task/multiple-mat-table-task.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MultipleMatTableTaskComponent,
  ],
  imports: [
    BrowserModule,
		MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
    //MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
