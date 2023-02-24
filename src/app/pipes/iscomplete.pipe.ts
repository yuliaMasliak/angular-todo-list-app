import { Pipe, PipeTransform } from '@angular/core'
import { IListItem } from '../models/types'

@Pipe({
  name: 'iscomplete',
  pure: false
})
export class IscompletePipe implements PipeTransform {
  transform(value: IListItem[], isCompleted: boolean): IListItem[] {
    value.filter((item) => {
      item.isComplete === isCompleted
    })
    console.log(value)
    return value
  }
}
