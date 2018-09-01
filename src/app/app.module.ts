import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{ ArchievedTodosPage } from "../pages/archieved-todos/archieved-todos";
import { TodoServiceProvider } from '../providers/todo-service/todo-service';
import { HttpClientModule }from '@angular/common/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArchievedTodosPage 
  
  ],
  imports: [ 
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp),
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArchievedTodosPage
  ],
  providers: [   
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoServiceProvider,
  
  ]
})
export class AppModule {}
