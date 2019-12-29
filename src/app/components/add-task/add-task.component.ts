import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import Task from '../../models/task.model';
import {TaskService} from '../../services/task/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Output()
  addTaskEvent: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  addTask(t: string) {
    const task: Task = {
      task: t,
      userId: 1,
      dueDate: '2020-01-06'
    };
    this.addTaskEvent.emit(task);
  }
}
