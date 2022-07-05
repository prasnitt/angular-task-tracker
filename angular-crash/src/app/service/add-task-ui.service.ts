import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddTaskUiService {
  private showAddTask: Boolean = false;
  private subject = new Subject<any>();


  constructor() { }

  toggleAddTaskUi():void{
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggleAddTaskUi():Observable<any> {
    return this.subject.asObservable();
  }
}
