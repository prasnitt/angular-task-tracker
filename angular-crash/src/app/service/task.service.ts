import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = "http://localhost:5000/tasks";
  constructor(private client: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.client.get<Task[]>(this.apiUrl)
  }
}
