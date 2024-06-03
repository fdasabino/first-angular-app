import { Component, Input } from '@angular/core';
import { User } from '../../../types';

@Component({
    selector: 'app-task',
    standalone: true,
    imports: [],
    templateUrl: './task.component.html',
    styleUrl: './task.component.scss',
})
export class TaskComponent {
    // get the user from the parent component event
    @Input({ required: true }) user!: User;
}
