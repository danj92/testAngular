import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { ResultComponent } from './result/result.component';
import { formRoutes } from './form.routing';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(formRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
