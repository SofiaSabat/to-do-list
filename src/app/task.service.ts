import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  [x: string]: any;
  private tasks: Array<ITask>= [
  //  { 
  //   id: 0,
  //    name: 'first task',
  //     description: " fvdsvdvs dsdv",
  //     status: "in progress",
  // },
  // { 
  //   id: 1,
  //    name: 'first task',
  //     description: " fvdsvdvs dsdv",
  //     status: "done",
  // },
  // { 
  //   id: 2,
  //    name: 'first task',
  //     description: " fvdsvdvs dsdv",
  //     status: "new",
  // }, 
  ]
  public getTasks(): Array<ITask>{
    return this.tasks;
  }
  public setTask(task: ITask): void{
     this.tasks.push(task);
  }
  public updateTask(task: ITask): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {

      this.tasks[index] = task;
    }
  }
    
  public getStatusColor(status: string): StatusColor {
    switch (status) {
      case 'new': 
        return {  backgroundColor: 'DarkOliveGreen' };
      case 'in progress': 
        return {  backgroundColor: 'GoldenRod' };
      case 'done': 
        return {  backgroundColor: 'Gainsboro', color: "grey" };
      default:
        return {  backgroundColor: 'Gainsboro'};
    }
  }

  constructor() { }

}
export interface StatusColor {
  backgroundColor: string;
  color?: string;
}
export interface ITask {
  id: number;
  name: string;
  description: string;
  status: string;
}