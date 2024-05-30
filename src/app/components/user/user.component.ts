import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../../../data/dummy-users';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
})
export class UserComponent {
    public randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    public selectedUser = DUMMY_USERS[this.randomIndex];

    public onSelectUser(): void {
        console.log('User selected:', this.selectedUser);
        const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
        this.selectedUser = DUMMY_USERS[randomIndex];
    }
}
