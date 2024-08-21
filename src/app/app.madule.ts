import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
