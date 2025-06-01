import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from '../../util/dummy-tasks';
import { NewTaskComponent } from '../new-task/new-task.component';
import { addTask } from '../../model/addTask.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;

  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter((t) => t.userId === this.userId);
  }

  onCompleteTask(id: string) {
    console.log('reachedtask id :', id);
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }

  onAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddedTask(taskData: addTask) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: this.userId,
    });
    this.isAddingTask = false;
  }
}
