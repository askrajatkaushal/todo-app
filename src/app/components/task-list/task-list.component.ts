import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Task from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input()
  tasks: Task[];

  @Output()
  deleteTaskEvent: EventEmitter<Task> = new EventEmitter<Task>();

  @Output()
  updateTaskEvent: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  deleteTask(task: Task) {
    this.deleteTaskEvent.emit(task);
  }

  updateTask(task: Task, taskCompleted: boolean) {
    task.status = taskCompleted ? 'FINISHED' : 'PENDING';
    this.updateTaskEvent.emit(task);
  }

  taskCompleted(checkBox: HTMLInputElement, task: Task) {
    checkBox.checked = task.status === 'FINISHED';
  }
}
