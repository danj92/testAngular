import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  forms = {};

  constructor() {}

  setValue (name, value) {
    this.forms[name] = value;
    // console.log(this.forms['form1'].name1);
  }

}
