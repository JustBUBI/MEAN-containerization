import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-finished-indicator',
  templateUrl: './finished-indicator.component.html',
  styleUrls: ['./finished-indicator.component.scss']
})
export class FinishedIndicatorComponent implements OnInit {

  @Output() taskStatusChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  changeTaskStatus() {
    this.taskStatusChanged.emit(false);
  }

}
