import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {

  @Output() formReady = new EventEmitter<FormGroup>();

  formGropOne: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.formGropOne = this.fb.group({
      name1: null,
    });

    this.formReady.emit(this.formGropOne);
  }

  submit() {
    this.dataService.setValue('form1', this.formGropOne.value);
    this.router.navigate(['/form2']);
  }

}
