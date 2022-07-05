import { Component, OnInit } from '@angular/core';
import { AddTaskUiService } from '../../services/add-task-ui.service'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  addTaskSubscription: Subscription;

  constructor(private addTaskUiService: AddTaskUiService,
    private router: Router) {
    this.addTaskSubscription = this.addTaskUiService.onToggleAddTaskUi().subscribe((value) => (this.showAddTask = value))
  }

  ngOnInit(): void {
  }

  toggleAddTask(): void {
    this.addTaskUiService.toggleAddTaskUi()
  }

  hasRoute(route: string): boolean {
    return this.router.url === route
  }

}
