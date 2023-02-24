import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { IListItem } from '../../../models/types'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() itemsList: IListItem[] = []
  @Output() TodoAddItem = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}
}
