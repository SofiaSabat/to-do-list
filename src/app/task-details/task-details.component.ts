import { Component } from '@angular/core';
import { ITask, TaskService } from '../task.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: [
    './task-details.component.scss',
    '../task-list/task-list.component.scss',
  ],
})
export class TaskDetailsComponent {
  public allTasks: ITask[] = [];
  public newTask!: FormGroup;
  public isEditingTask = false;
  public editTaskForm!: FormGroup;

  constructor(private fb: FormBuilder, public taskService: TaskService) {
    this.allTasks = this.taskService.getTasks();
  }
  ngOnInit(): void {
    this.initEditTaskForm();
  }
  initEditTaskForm(): void {
    this.editTaskForm = this.fb.group({
      id: [this.allTasks.length],
      name: [null, Validators.required],
      description: [null, Validators.required],
      status: [1, Validators.required],
    });
  }
  public allStatus = [
    { id: 1, title: 'new' },
    { id: 2, title: 'in progress' },
    { id: 3, title: 'done' },
  ];
  public editTask(editTask: ITask): void {
    this.isEditingTask = true;
    this.editTaskForm.patchValue({
      id: editTask.id,
      name: editTask.name,
      description: editTask.description,
      status: editTask.status,
    });
  }
  public closeModal(): void {
    this.isEditingTask = false;
  }
  public submitEdited(): void {
    const updatedTask = this.editTaskForm.value;
    const index = this.allTasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      this.taskService.updateTask(updatedTask);
      this.allTasks[index] = updatedTask;
    }
    this.isEditingTask = false;
  }

  public checkEmpty(): boolean {
    return this.allTasks.length == 0;
  }
}
