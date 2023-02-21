import { Component, OnInit } from '@angular/core'

interface IListItem {
  id: number
  title: string
  isComplete: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoItem = ''
  itemsList: IListItem[] = []
  idCounter = 0
  isComplete = false

  constructor() {}

  onSubmit() {
    let input = document.querySelector('.input-todo') as HTMLInputElement
    this.itemsList.push({
      id: this.idCounter,
      title: input.value,
      isComplete: this.isComplete
    })
    this.idCounter += 1
    input.value = ''
  }
  toggleComplete() {
    this.isComplete = !this.isComplete
    console.log(this.isComplete)
  }
}
