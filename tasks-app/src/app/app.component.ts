import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tasks-app';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.fetchTasks();
  }
}
