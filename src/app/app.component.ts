import { Component, OnInit } from '@angular/core'
import { IListItem } from './components/types'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  itemsList: IListItem[] = []
  constructor() {}
  ngOnInit(): void {}
  onAddTodo(item: IListItem) {
    this.itemsList.push(item)
    console.log(this.itemsList)
  }
}
