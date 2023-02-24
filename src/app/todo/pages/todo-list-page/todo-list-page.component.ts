import { Component } from '@angular/core'
import { IListItem } from 'src/app/models/types'

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.css']
})
export class TodoListPageComponent {
  itemsList: IListItem[] = []

  title = 'The Todo-List Management App'
  constructor() {}
  ngOnInit(): void {}
  onAddTodo(item: IListItem) {
    this.itemsList.push(item)
  }
}
