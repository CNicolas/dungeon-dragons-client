import { KeyValue } from '@angular/common'
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'enumKeyValue'
})
export class EnumKeyValuePipe<T extends {}> implements PipeTransform {
  transform(enumeration: { [x: string]: any }): KeyValue<string, any>[] {
    return Object.keys(enumeration).map((key: string) => ({
      key: key,
      value: enumeration[key]
    }))
  }
}
