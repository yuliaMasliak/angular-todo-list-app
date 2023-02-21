import { Component, Input, OnInit } from '@angular/core'
import { IListItem } from '../types'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() itemsList: IListItem[] = []
  completedItems: IListItem[] = []
  todoTitle = 'Todo'
  doneTitle = 'Done'

  constructor() {}

  toggleComplete(item: IListItem) {
    item.isComplete = !item.isComplete
  }
  addToDone() {
    this.itemsList.map((item, index) => {
      if (item.isComplete) {
        this.completedItems.push(item)
        this.itemsList.splice(index, 1)
      }
    })
  }
  addToUndone(item: IListItem) {
    this.completedItems.map((item, index) => {
      if (!item.isComplete) {
        this.itemsList.push(item)
        this.completedItems.splice(index, 1)
      }
    })
  }
  ngOnInit(): void {}
}
