import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from '../../data/dummy-users';
import { User } from '../types';
import { FooterComponent } from './components/UI/footer/footer.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { TaskComponent } from './components/task/task.component';
import { UserComponent } from './components/user/user.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
        UserComponent,
        CommonModule,
        TaskComponent,
    ],
    templateUrl: './app.component.html',
})
export class AppComponent {
    users = DUMMY_USERS;
    selectedUser: User | null = null;

    onSelectUser(user: User): void {
        this.selectedUser = user;
    }
}
