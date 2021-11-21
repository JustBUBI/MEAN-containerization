import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'app-active-tasks',
  templateUrl: './active-tasks.component.html',
  styleUrls: ['./active-tasks.component.scss']
})
export class ActiveTasksComponent implements OnInit {

  activeTasks: Task[] = [];

  constructor(private taskService: TaskService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.taskService.tasks.subscribe(list => {
      this.activeTasks = list.filter(task => !task.isFinished);
    });
  }

  openCreateTaskDialog() {
    this.dialog.open(CreateTaskComponent);
  }

}
