import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  message: string;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.curentMessage.subscribe(message => this.message = message);
  }
}
