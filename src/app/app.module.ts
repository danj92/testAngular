import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { ResultComponent } from './result/result.component';
import { formRoutes } from './form.routing';
import { Form3Component } from './form3/form3.component';
import { DataService } from './data.service';
import { MyInputComponent } from './my-input/my-input.component';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    ResultComponent,
    Form3Component,
    MyInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(formRoutes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
