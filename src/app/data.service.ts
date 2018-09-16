import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<string>('default value');

  curentMessage = this.messageSource.asObservable();

  constructor() {}

  changeMessage(message: string) {
    this.curentMessage.next(message);
  }

}
