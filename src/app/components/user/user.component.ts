import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../../../../data/dummy-users';

const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
})
export class UserComponent {
    public selectedUser = DUMMY_USERS[randomUser];
}
