import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ActiveTasksComponent } from './components/active-tasks/active-tasks.component';
import { FinishedTasksComponent } from './components/finished-tasks/finished-tasks.component';
import { TaskComponent } from './components/task/task.component';
import { FinishedIndicatorComponent } from './components/task/finished-indicator/finished-indicator.component';
import { ActiveIndicatorComponent } from './components/task/active-indicator/active-indicator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatDialogModule } from '@angular/material/dialog';
import { CreateTaskComponent } from './components/create-task/create-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveTasksComponent,
    FinishedTasksComponent,
    TaskComponent,
    FinishedIndicatorComponent,
    ActiveIndicatorComponent,
    CreateTaskComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
