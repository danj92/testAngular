import { Routes } from '@angular/router';
import { Form2Component } from './form2/form2.component';
import { ResultComponent } from './result/result.component';
import { Form1Component } from './form1/form1.component';

export const formRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Form1Component,
  },
  {
    path: 'form2',
    component: Form2Component,
  },
  {
    path: 'form2/result',
    component: ResultComponent,
  }
];
