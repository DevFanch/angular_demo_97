import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from './partials/header/header.component';
import { DatePipe, DecimalPipe, JsonPipe, SlicePipe } from '@angular/common';
import { TaskService } from './services/task.service';
import { Task } from './interfaces/task';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, DatePipe, JsonPipe, DecimalPipe, SlicePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  // Properties
  title = 'Demo bases Angular';
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
  products?: Array<any>

  // Injection d'un service en tant que prop
  // private taskService: TaskService = inject(TaskService)
  private productService: ProductsService = inject(ProductsService)

  // constructor
  // Injection depuis le constructor
  constructor(taskService: TaskService) {
    this.tasks = taskService.getTasks()
  }

  // Hook OnInit
  ngOnInit() {
    this.productService.fetchProducts().subscribe({
      next: (data: any) => {
        this.products = data.products
        console.log(data);
      },
      error: (error: any) => {
        console.error(error)
      }
    })
  }

  // Methods
  addOne() {
    this.count++
  }
}
