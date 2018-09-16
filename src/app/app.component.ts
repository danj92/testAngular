import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  checkoutForm = new FormGroup({});

  constructor() {}

  ngOnInit() {}

  formInitialized(name: string, form: FormGroup) {
    this.checkoutForm.setControl(name, form);
    console.log(this.checkoutForm.value);
  }
}
