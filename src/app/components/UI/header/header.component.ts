import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    public logo: string = 'Easy Task Manager 📝📅📌';
    public message: string = ' Lets get started with your next task 🤞☀️';
    public buttonText: string = 'Add new task';
}
