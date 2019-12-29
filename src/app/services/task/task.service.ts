import { Injectable } from '@angular/core';
import {DataService} from '../data/data.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends DataService {

  constructor(http: HttpClient) {
    super(http, 'http://localhost:9091/task');
    Object.setPrototypeOf(this, DataService.prototype);
  }

}
