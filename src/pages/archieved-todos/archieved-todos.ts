import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';
/**
 * Generated class for the ArchievedTodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archieved-todos',
  templateUrl: 'archieved-todos.html',
})
export class ArchievedTodosPage {
public deleteIteminArchieved=[];
  constructor(private todoservice:TodoServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDid Load ArchievedTodosPage');
    this.deleteIteminArchieved=this.todoservice.getDeleteTodos();
  }

}
