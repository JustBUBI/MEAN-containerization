import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-active-indicator',
  templateUrl: './active-indicator.component.html',
  styleUrls: ['./active-indicator.component.scss']
})
export class ActiveIndicatorComponent implements OnInit {

  @Output() taskStatusChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  changeTaskStatus() {
    this.taskStatusChanged.emit(true);
  }

}
