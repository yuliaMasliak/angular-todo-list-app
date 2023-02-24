import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { IListItem } from '../../../models/types'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  idCounter = 0

  @Output() TodoAdd = new EventEmitter()

  onSubmit() {
    let input = document.querySelector('.input-todo') as HTMLInputElement
    this.TodoAdd.emit({
      id: this.idCounter,
      title: input.value,
      isComplete: false
    })
    this.idCounter += 1
    input.value = ''
  }
  ngOnInit(): void {}
}
