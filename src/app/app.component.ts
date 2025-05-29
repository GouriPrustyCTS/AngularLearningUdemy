import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'my-first-app';
}

/**

selector ->  When Angular encounters <app-root></app-root> in your index.html (or another component's template), it knows to render this AppComponent there.

imports ->  This property is used in standalone components (which this component appears to be, as it uses imports directly in @Component instead of NgModule). It declares other standalone components, directives, or pipes that this component needs to use in its template.
if any other components needs to be used inside this current app component then u mention it

 */
