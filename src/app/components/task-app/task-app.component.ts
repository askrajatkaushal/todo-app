import {Component, OnInit} from '@angular/core';
import Task from '../../models/task.model';
import {TaskService} from '../../services/task/task.service';

@Component({
  selector: 'app-task-app',
  templateUrl: './task-app.component.html',
  styleUrls: ['./task-app.component.scss']
})
export class TaskAppComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getAll().subscribe((tasks: Task[]) => this.tasks = tasks);
  }

  addTask(task: Task) {
    this.taskService.create(task).subscribe((t: Task) => this.tasks.push(t));
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    this.taskService.delete(task.id).subscribe(null);
  }

  updateTask(task: Task) {
    this.tasks = this.tasks.map(t => (t.id === task.id) ? task : t);
    this.taskService.update(task).subscribe(null);
  }

}
