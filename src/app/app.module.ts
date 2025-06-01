import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { UserComponent } from './component/user/user.component';
import { CardModule } from './module/card.module';
import { TaskModule } from './module/task.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, CardModule, TaskModule],
})
export class AppModule {}
