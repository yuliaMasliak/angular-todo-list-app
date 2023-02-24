import { Component, OnInit } from '@angular/core'
import { IListItem } from './models/types'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  itemsList: IListItem[] = []

  title = 'The Todo-List Management App'
  constructor() {}
  ngOnInit(): void {}
}
