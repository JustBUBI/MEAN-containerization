import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);

  constructor(private http: HttpClient) {}

  fetchTasks() {
    return this.http
      .get<any>(`${environment.API_URL}/api/tasks`)
      .subscribe((data) => {
        this.tasks.next(data.tasks);
      });
  }

  createTask(body: any) {
    return this.http
      .post<any>(`${environment.API_URL}/api/tasks`, body)
      .subscribe((data) => {
        const tasks = this.tasks.value;
        tasks.push(data.task as Task);
        this.tasks.next(tasks);
      });
  }

  changeTaskStatus(id: number, status: boolean) {
    return this.http
      .patch<any>(`${environment.API_URL}/api/tasks/${id}`, {
        isFinished: status,
      })
      .subscribe(() => {
        const tasks = this.tasks.value;
        tasks.forEach((task) => {
          if (task._id == id) task.isFinished = status;
        });
        this.tasks.next(tasks);
      });
  }
}
