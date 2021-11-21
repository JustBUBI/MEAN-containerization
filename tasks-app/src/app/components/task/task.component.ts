import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task!: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  changeTaskStatus(status: boolean) {
    this.taskService.changeTaskStatus(this.task._id, status);
  }

}
