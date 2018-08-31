 import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos =[];
  public reorderIsEnabled=false;//for checking at home.html is enabled or not
  constructor(public navCtrl: NavController,private alertController:AlertController) {

  }
  toggleReorder(){
    this.reorderIsEnabled=!this.reorderIsEnabled;
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
        this.todos.push(todoText);
    }
    }]

  }); 
  addTodoAlert.present();
}
} 
