import { Injectable } from '@angular/core';
import { addTask } from '../model/addTask.model';
import { dummyTasks } from '../util/dummy-tasks';

@Injectable({providedIn:'root'})    // similar @Component - now nagular knows this class instance are need to be created and provide to the root of the component so any component under it can inject this same instance when we need it - create/ reuse only 1 - deals on same data
export class TasksService {
  tasks = dummyTasks;

  getUserTasks(userId: string) {
    return this.tasks.filter((t) => t.userId === userId);
  }

  addUserTask(taskData: addTask, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: userId,
    });
  }

  removeUserTask(id:string){
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}
