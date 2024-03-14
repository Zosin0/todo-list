import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat/';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { TodoComponent } from './todo/todo.component';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';


@NgModule({
    declarations:[
        AppComponent,
        TodoComponent
    ],
    imports:[
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule{}