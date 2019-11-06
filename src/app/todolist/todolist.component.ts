import { Component, OnInit } from '@angular/core';

class TodoItem {
  isDone: boolean;
  name: string;
}
@Component({
  selector: 'app-todolist',
  template: `
  <h1> Todo List Component </h1>
  <div>
  <input type="text" placeholder="add a todo item here" [(ngModel)]="todotext"/>
  <input type="submit" (click)="addItem()" value="Add Todo" />
  </div>
  <div>
      <ul>
          <li *ngFor="let item of todoList">
              <span [ngClass]="{'is-done': item.done}" (click)="handleClick(event, item)">{{ item.name }}</span>
          </li>
      </ul>
      <p> {{getRemainingCount()}} remaining out of {{getTotal()}} tasks</p>      
  </div>
  `,
  styles: [`
    .is-done {
      text-decoration: line-through;
    }
  `]
})
export class TodolistComponent implements OnInit {
  textDecorationChange : boolean = false;
  constructor() { }

  ngOnInit() {
  }
  todotext : string= '';
  todoList: any[] = [];

  addItem(): void {
    this.addTodo(this.todotext);
}
  
  addTodo (todoItem: string): void {
        this.todoList.push({
            name: todoItem,
            done: false
        });
    }
    public getTotal(){
      return this.todoList.length;
  }
    public getRemainingCount() {
      return this.todoList.filter(todoList => !todoList.isDone).length;
    }

  public handleClick(event:any, myitem:any){
      let member = this;
      console.log(member);
      myitem.isDone = !myitem.done;
      myitem.done = !myitem.done;
      console.log(myitem.isDone);
      console.log(myitem.name);      
      }
  
}
