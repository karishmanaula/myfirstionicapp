 import { Component } from '@angular/core';
import { NavController,AlertController, reorderArray,ToastController } from 'ionic-angular';
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
  constructor(private toastController:ToastController,private todoService:TodoServiceProvider,public navCtrl: NavController,private alertController:AlertController) {
    this.todos=this.todoService.getTodos();
  }
  archievedTodo(todoIndex){
    this.todoService.archievedTodo(todoIndex );
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
          addTodoAlert.onDidDismiss(()=>{
            let addTodoToast=this .toastController.create({
              message:"Todo is added",
              duration:2000
            });
            addTodoToast.present();
          });
     
       
    }
    }]

  }); 
  addTodoAlert.present();
}

editTodo (todoIndex){ 
  
  let editTodoAlert=this.alertController.create({
    title:"Edit A task ",
    message:"Edit your Task", 
    inputs:[{
      type:"text",
      name:"editTodoInput",
      value :this.todos[todoIndex]
    }] , 
    buttons:[{text:"Cancel"},
    {
        text:"Edit  Todo",
        handler:(inputData)=>{
        let todoText;
        todoText=inputData.editTodoInput;
       // this.todos.push(todoText);
       this.todoService.editTodo(todoText,todoIndex);
        editTodoAlert.onDidDismiss(()=>{
            let editTodoToast=this .toastController.create({
              message:"Todo is edited",
              duration:2000
            });
            editTodoToast.present();
          });
     
       
    }
    }]

  }); 
  editTodoAlert.present();
}
}  
 