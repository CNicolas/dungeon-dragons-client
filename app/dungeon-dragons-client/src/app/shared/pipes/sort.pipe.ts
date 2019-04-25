import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'sort'
})
export class SortPipe<T extends {}> implements PipeTransform {
  transform(entries: T[], ...args: string[]): T[] {
    if (!!args[0]) {
      return entries.sort(compareObjectsByField(args[0]))
    }

    throw new Error('Missing field parameter')
  }
}

const compareObjectsByField = (field: string) => <T>(object1: T, object2: T): number => {
  if (object1[field] < object2[field]) {
    return -1
  }
  if (object1[field] > object2[field]) {
    return 1
  }
  return 0
}
