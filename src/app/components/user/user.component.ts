import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../types';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
})
export class UserComponent {
    @Input({ required: true }) user!: User;
    @Output() selectUser = new EventEmitter<User>();

    onSelectUser(): void {
        console.log('User selected:', this.user.id);
        this.selectUser.emit(this.user);
    }
}
