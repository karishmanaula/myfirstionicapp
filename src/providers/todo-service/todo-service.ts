import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoServiceProvider {
private todos=[];
private arrtoDelete=[];
  constructor(public http: HttpClient) {
    console.log('Hello TodoServiceProvider Provider');
  }
  archievedTodo(todoIndex){
    let todoToDelete=this.todos[todoIndex];
    this.todos.splice(todoIndex,1);
    this.arrtoDelete.push(todoToDelete);
  }
  getTodos(){
    return this.todos;
  }
getDeleteTodos(){
  return this.arrtoDelete;
}

  
addTodo(todoText)
{
  this.todos.push(todoText);
  console.log(this.todos)
}
editTodo(todo,todoIndex){
  this.todos[todoIndex]=todo;
} 
}
