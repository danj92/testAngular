import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  message: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.curentMessage.subscribe(message => this.message = message);
  }

  newMessage() {
    this.dataService.changeMessage('Hello');
  }

}
