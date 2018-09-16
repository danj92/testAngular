import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {

  @Output() formReady = new EventEmitter<FormGroup>();

  formGropOne: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formGropOne = this.fb.group({
      name1: null,
    });

    this.formReady.emit(this.formGropOne);
  }


}
