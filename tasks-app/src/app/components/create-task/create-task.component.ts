import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  selectedColor: string;
  title = new FormControl('');

  constructor(private taskService: TaskService,
    private dialogRef: MatDialogRef<CreateTaskComponent>) {
    this.selectedColor = 'yellow';
  }

  ngOnInit(): void {}

  createTask() {
    var newTask = {
      title: this.title.value,
      color: this.selectedColor,
    };
    this.taskService.createTask(newTask);
    this.close();
  }

  close() {
    this.dialogRef.close();
  }
}
