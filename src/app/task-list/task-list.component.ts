import { Component, SimpleChanges } from '@angular/core';
import { ITask, TaskService } from '../task.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  public allTasks: ITask[] = [];
  public newTask!: FormGroup;
  public isAddingTask = false;

  constructor(private fb: FormBuilder, public taskService: TaskService) {
    this.allTasks = this.taskService.getTasks();
  }

  ngOnInit(): void {
    this.initNewTaskForm();
  }
  initNewTaskForm(): void {
    this.newTask = this.fb.group({
      id: [this.allTasks.length],
      name: [null, Validators.required],
      description: [null, Validators.required],
      status: [null],
    });
  }

  public addTask(): void {
    this.newTask.patchValue({ id: this.allTasks.length });
    this.newTask.patchValue({ status: 'new' });
    this.taskService.setTask(this.newTask.value);
    this.isAddingTask = false;
    console.log(this.taskService.getTasks());

    this.newTask.reset();
  }
  public plusBtn(): void {
    this.isAddingTask = true;
  }
  public closeAddingTask() {
    this.isAddingTask = false;
  }
  public checkEmpty(): boolean {
    return this.allTasks.length == 0;
  }
}
