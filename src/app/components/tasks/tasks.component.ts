import { Component, Input } from '@angular/core';
import { User } from '../../../types';
import { TaskComponent } from './task/task.component';

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent],
    templateUrl: './tasks.component.html',
})
export class TasksComponent {
    @Input({ required: true }) user: User | null = null;
}
