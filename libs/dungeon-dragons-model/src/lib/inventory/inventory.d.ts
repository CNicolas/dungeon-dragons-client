import { WeaponRange } from '@dungeon-dragons-model/inventory/range.enum'

export interface Weapon {
  name: string
  range: typeof WeaponRange
  touch: number
  damage: number
  special: string
}

export interface Equipment {
  name: string
  armor: number
  special: string
}

export interface Expandable {
  name: string
  count: number
  special: string
}

export interface OtherItem {
  name: string
  special: string
}
