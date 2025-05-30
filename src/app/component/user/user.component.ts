import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {}
}


/**
 * @Input() decorator in Angular is used for passing data from a parent component to a child component. - variable name should be same as parent template as it is coming from there. - and then from here goes to the templateURL to render
 * 
 * avatar!: string;, you're telling TypeScript, "I know this property (avatar) will eventually be assigned a value, even though I'm not assigning it here in the constructor or at the point of declaration. Trust me, it will be initialized.
 * 
 */