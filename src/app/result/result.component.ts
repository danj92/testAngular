import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  checkoutForm = new FormGroup({});

  constructor(public dataService: DataService) {}

  ngOnInit() {
  }

  formInitialized(name: string, form: FormGroup) {
    this.checkoutForm.setControl(name, form);
    console.log(this.checkoutForm.value);
  }
}
