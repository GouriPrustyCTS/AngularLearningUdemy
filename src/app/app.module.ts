import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./component/header/header.component";
import { UserComponent } from "./component/user/user.component";
import { TasksComponent } from "./component/tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[AppComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule, HeaderComponent,UserComponent,TasksComponent]
})
export class AppModule{

}