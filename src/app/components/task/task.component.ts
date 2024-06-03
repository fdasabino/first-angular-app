import { Component, Input } from '@angular/core';
import { User } from '../../../types';

@Component({
    selector: 'app-task',
    standalone: true,
    imports: [],
    templateUrl: './task.component.html',
})
export class TaskComponent {
    @Input({ required: true }) user!: User;
}
