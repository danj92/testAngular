import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component implements OnInit {

  userListGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.userListGroup = new FormGroup({
      users: new FormArray([
        new FormControl('Alis'),
        new FormControl('Jon'),
        new FormControl('Piotr'),
      ])
    });

    // console.log(this.userListGroup.controls.users.controls[1]);

    this.userListGroup.valueChanges.subscribe(value => console.log(value));


  }

  removeUserControl(index) {
    (this.userListGroup.controls['users'] as FormArray).removeAt(index);
    // console.log(this.userListGroup.controls);
  }

  addUserControl() {
    (this.userListGroup.controls['users'] as FormArray).push(new FormControl(''));
  }


}
