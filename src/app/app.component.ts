import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoItem = ''
  input: HTMLInputElement

  constructor() {
    this.input = document.querySelector('.input-todo') as HTMLInputElement
  }

  onSubmit() {
    let itemList = document.querySelector('.list-item') as HTMLElement
    let itemToAdd = document.createElement('div') as HTMLElement
    itemToAdd.classList.add('list-item-to-add')
    let input = document.querySelector('.input-todo') as HTMLInputElement
    itemToAdd.innerHTML = input.value
    itemList.append(itemToAdd)
  }
  onFocus() {
    let input = document.querySelector('.input-todo') as HTMLInputElement
    input.value = ''
  }
}
