import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss']
})
export class MyInputComponent implements OnInit {

@Input() public state: string;

  constructor() { }

  ngOnInit() {

  }

}
