import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Task } from '../../interfaces/task';
import { TaskService } from '../../services/task.service';
import { DatePipe, DecimalPipe, JsonPipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-cours',
  standalone: true,
  imports: [DatePipe, JsonPipe],
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.scss'
})
export class CoursComponent {
  // Properties
  today: Date = new Date
  isAdmin: boolean = true
  courseList: Array<string> = [
    'pain', 
    'chocolat',
    'beurre de cacahuète'
  ]
  pathImage: string = "https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  count: number = 0

  
  tasks?: Array<Task>

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
