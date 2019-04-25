import { KeyValue } from '@angular/common'

export function compareEntriesByValue(entry1: KeyValue<number, string>, entry2: KeyValue<number, string>): number {
  if (entry1.value < entry2.value) {
    return -1
  }
  if (entry1.value > entry2.value) {
    return 1
  }
  return 0
}

export function compareEntriesByKey(entry1: KeyValue<number, string>, entry2: KeyValue<number, string>): number {
  if (entry1.key < entry2.key) {
    return -1
  }
  if (entry1.key > entry2.key) {
    return 1
  }
  return 0
}
