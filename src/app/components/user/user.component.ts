import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../../../../data/dummy-users';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
})
export class UserComponent {
    public randomUser = Math.floor(Math.random() * DUMMY_USERS.length);
    public selectedUser = DUMMY_USERS[this.randomUser];
}
