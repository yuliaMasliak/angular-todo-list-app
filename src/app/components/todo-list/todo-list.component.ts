import { Component, Input, OnInit } from '@angular/core'
import { IListItem } from '../types'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() itemsList: IListItem[] = []

  constructor() {}

  toggleComplete(item: IListItem) {
    item.isComplete = !item.isComplete
    console.log(item.isComplete)
  }
  ngOnInit(): void {}
}
