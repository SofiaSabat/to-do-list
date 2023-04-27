import { Component } from '@angular/core';
import { ITask, TaskService } from '../task.service';

@Component({
  selector: 'app-task-deletion',
  templateUrl: './task-deletion.component.html',
  styleUrls: ['./task-deletion.component.scss', '../task-list/task-list.component.scss']
})
export class TaskDeletionComponent {
  public allTasks: ITask[] = [];
  constructor(public taskService: TaskService) {
    this.allTasks = this.taskService.getTasks();
  }
  public deleteTask(deleteTask: ITask):void{    
    this.allTasks.splice(this.allTasks.length - 1, 1);
  }
  public checkEmpty():boolean{
    return this.allTasks.length == 0;
   }
}
