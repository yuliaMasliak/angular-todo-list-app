import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AddTodoComponent } from './components/add-todo/add-todo.component'
import { TodoListComponent } from './components/todo-list/todo-list.component'

@NgModule({
  declarations: [AppComponent, AddTodoComponent, TodoListComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
