import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TodoListPageComponent } from './pages/todo-list-page/todo-list-page.component'
import { AddTodoComponent } from './components/add-todo/add-todo.component'
import { TodoListComponent } from './components/todo-list/todo-list.component'
import { ItemTodoComponent } from './components/item-todo/item-todo.component'
import { FormsModule } from '@angular/forms'
import { IscompletePipe } from '../pipes/iscomplete.pipe'
import { OnhoverDirective } from '../directives/onhover.directive'
import { PageDesignDirective } from '../directives/page-design.directive'

@NgModule({
  declarations: [
    TodoListPageComponent,
    AddTodoComponent,
    TodoListComponent,
    ItemTodoComponent,
    IscompletePipe,
    OnhoverDirective,
    PageDesignDirective
  ],
  imports: [CommonModule, FormsModule],
  exports: [TodoListPageComponent, PageDesignDirective]
})
export class TodoModule {}
