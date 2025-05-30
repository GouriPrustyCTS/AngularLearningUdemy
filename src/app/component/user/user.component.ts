import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../util/dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //selectedUser - by default it is public or if private then it cant be accessed - public property of the class - whatever u declare here will be available to the html template to access this
  selectedUser = DUMMY_USERS[0];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser() {
    console.log('Clicked');
    this.selectedUser = DUMMY_USERS[1];
  }
}
