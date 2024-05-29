import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from '../../data/dummy-users';
import { FooterComponent } from './components/UI/footer/footer.component';
import { HeaderComponent } from './components/UI/header/header.component';
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
    ],
    templateUrl: './app.component.html',
})
export class AppComponent {
    users = DUMMY_USERS;
}
