import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'enumValue'
})
export class EnumValuePipe<T> implements PipeTransform {
  transform(key: string, enumeration: { [x: string]: T }): T {
    return enumeration[key]
  }
}
