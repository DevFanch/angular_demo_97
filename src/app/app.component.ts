import { Component } from '@angular/core';
import { HeaderComponent } from './partials/header/header.component';
import { DatePipe, JsonPipe } from '@angular/common';
import { TaskService } from './services/task.service';
import { Task } from './interfaces/task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, DatePipe, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Properties
  title = 'Demo bases Angular';
  today: Date = new Date
  isAdmin: boolean = false
  courseList: Array<string> = [
    'pain', 
    'chocolat',
    'beurre de cacahuète'
  ]
  pathImage: string = "https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  count: number = 0

  tasks?: Array<Task>
  // Injection d'un service en tant que prop
  // private taskService: TaskService = inject(TaskService)

  // constructor
  // Injection depuis le constructor
  constructor(taskService: TaskService) {
    this.tasks = taskService.getTasks()
  }

  // Methods
  addOne() {
    this.count++
  }
}
