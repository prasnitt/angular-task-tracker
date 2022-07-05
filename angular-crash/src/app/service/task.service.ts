import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = "http://localhost:5000/tasks";
  constructor(private client: HttpClient) { }

  addTask(task: Task): Observable<Task> {
    return this.client.post<Task>(this.apiUrl, task, httpOptions)
  }

  getTasks(): Observable<Task[]> {
    return this.client.get<Task[]>(this.apiUrl)
  }

  deteteTask(task: Task): Observable<Task> {
    const url: string = `${this.apiUrl}/${task.id}`;
    return this.client.delete<Task>(url)
  }

  updateTask(task: Task): Observable<Task> {
    const url: string = `${this.apiUrl}/${task.id}`;
    return this.client.put<Task>(url, task, httpOptions)
  }
}
