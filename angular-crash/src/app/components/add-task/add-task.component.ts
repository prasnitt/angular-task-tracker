import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { AddTaskUiService } from '../../service/add-task-ui.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = "";
  day: string = "";
  reminder: boolean = false;

  showAddTask: boolean = false;
  addTaskSubscription: Subscription;

  constructor(private addTaskUiService: AddTaskUiService) {
    this.addTaskSubscription = this.addTaskUiService.onToggleAddTaskUi().subscribe((value) => (this.showAddTask = value))
  }

  
  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert("Please Add task")
      return
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = ""
    this.day = ""
    this.reminder = false
  }
}
