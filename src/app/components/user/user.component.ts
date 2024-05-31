import { Component, Input, input } from '@angular/core';

type User = {
    name: string;
    avatar: string;
};

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
})
export class UserComponent {
    @Input({ required: true }) user!: User;
    onSelectUser(): void {}
}
