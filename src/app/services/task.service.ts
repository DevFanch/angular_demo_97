import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Array<Task>|undefined = [
    {title: 'Digérer'},
    {title: 'Faire la sieste'},
    {title: 'Prendre un café'},
  ]

  getTasks(): Array<Task>|undefined {
    return this.tasks
  }
}
