import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
// import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hellow = 'Andriy';
  items = [
    "Apple iPhone 7",
   "Huawei Mate 9",
   "Samsung Galaxy S7",
    "Motorola Moto Z"
  ];

  // myContext = {
  //   $implicit: 'World',
  //   localSk: 'Svet'
  // };

  count = 5;
  consition = true;
  // checkoutForm = new FormGroup({});

  // constructor() {}
  nameControl: FormControl;
  ngOnInit() {
    this.nameControl = new FormControl('Jon', [this.myValidators]);
    this.nameControl.valueChanges.subscribe(value => console.log(value));
    this.nameControl.statusChanges.subscribe(status => {
      console.log(this.nameControl.errors);
      console.log(status);
    });
  }

  // formInitialized(name: string, form: FormGroup) {
  //   this.checkoutForm.setControl(name, form);
  //   console.log(this.checkoutForm.value);
  // }

   myValidators(formControl: FormControl) {
    if (formControl.value.lenght < 3) {
      return { myValidators: { message: 'Should be somesing'}};
    } else {
      return null;
    }
  }

  // myAsyncValidators(formControl: FormControl): Observable<null | any> {
  //   if (formControl.value.lenght < 3) {
  //     return Observable.of({ myValidators: { message: 'Should be somesing'}});
  //   } else {
  //     return Observable.of(null);
  //   }
  // }


  toggle() {
    console.log(this.consition);
    this.consition = !this.consition;
  }
}

