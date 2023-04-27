import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskDeletionComponent } from './task-deletion/task-deletion.component';
import { HeaderComponent } from './header/header.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { provideDatabase,getDatabase } from '@angular/fire/database';
// import { AngularFireStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailsComponent,
    TaskDeletionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    provideDatabase(() => getDatabase())   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
