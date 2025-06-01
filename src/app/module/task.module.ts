import { NgModule } from '@angular/core';
import { NewTaskComponent } from '../component/new-task/new-task.component';
import { TaskComponent } from '../component/task/task.component';
import { TasksComponent } from '../component/tasks/tasks.component';
import { CardModule } from './card.module';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, CardModule],
})
export class TaskModule {}
