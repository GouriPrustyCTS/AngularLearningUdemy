import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../model/task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    console.log("Id of the task : ",this.task.id);
    
    this.complete.emit(this.task.id);
  }
}
