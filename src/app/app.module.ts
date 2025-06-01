import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { UserComponent } from './component/user/user.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { TaskComponent } from './component/task/task.component';
import { NewTaskComponent } from './component/new-task/new-task.component';
import { CardModule } from './module/card.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule,CardModule],
})
export class AppModule {}
