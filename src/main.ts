import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/component/header.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// this is the line we need to add - so that angular can know which component to render

bootstrapApplication(HeaderComponent, appConfig).catch((err) =>
  console.error(err)
);
