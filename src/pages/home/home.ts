 import { Component } from '@angular/core';
import { NavController,AlertController, reorderArray } from 'ionic-angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import{ ArchievedTodosPage } from "../archieved-todos/archieved-todos";
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos =[];  
  public archivedTodosPage="ArchievedTodosPage";//for navigation via variabe stored in [navpush]=archivedTodoPage at;
  public reorderIsEnabled=false;//for checking at home.html is enabled or not
  constructor(private todoService:TodoServiceProvider,public navCtrl: NavController,private alertController:AlertController) {
    this.todos=this.todoService.getTodos();
  }


 goToArchivePage(){
   this.navCtrl.push(ArchievedTodosPage );
  }
  toggleReorder(){
    this.reorderIsEnabled=!this.reorderIsEnabled;
  }

  
  itemReordered($event){
    reorderArray(this.todos,$event);

  }
openTodoAlert(){ 
  let addTodoAlert=this.alertController.create({
    title:"ADD A task ",
    message:"Enter your Task", 
    inputs:[{
      type:"text",
      name:"addTodoInput",
    }] , 
    buttons:[{text:"Cancel"},
    {
        text:"Add to do",
        handler:(inputData)=>{
        let todoText;
        todoText=inputData.addTodoInput;
       // this.todos.push(todoText);
       this.todoService.addTodo(todoText);
    }
    }]

  }); 
  addTodoAlert.present();
}
} 
 