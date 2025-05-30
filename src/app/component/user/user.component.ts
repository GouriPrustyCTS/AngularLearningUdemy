import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../../util/dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //selectedUser - by default it is public or if private then it cant be accessed - public property of the class - whatever u declare here will be available to the html template to access this
  selectedUser = signal(DUMMY_USERS[0]); // signals are like useState() hook in react

  // computed() method is used if signal is implemented - re compute when there is change noticed
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser() {
    console.log('Clicked');
    this.selectedUser.set(DUMMY_USERS[1]);  // setState()
  }
}
