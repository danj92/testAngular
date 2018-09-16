import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {

  @Output() formReady = new EventEmitter<FormGroup>();

  formGropTwo: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formGropTwo = this.fb.group({
      name2: null,
    });

    this.formReady.emit(this.formGropTwo);
  }

}
