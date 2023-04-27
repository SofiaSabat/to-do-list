import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDeletionComponent } from './task-deletion/task-deletion.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  {path: 'task-details', component: TaskDetailsComponent },
  {path: 'task-deletion', component: TaskDeletionComponent},
  {path: 'task-list', component: TaskListComponent},
  {path: '',  pathMatch: 'full',  redirectTo: 'task-list' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
