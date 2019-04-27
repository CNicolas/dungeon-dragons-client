import { Equipment, Expandable, OtherItem, Weapon } from '@dungeon-dragons-model/inventory'
import { Action } from '@dungeon-dragons-model/actions'

export interface Player {
  id: number
  name: string
  race: string
  level: number
  weapons: Weapon[]
  equipments: Equipment[]
  expandables: Expandable[]
  otherItems: OtherItem[]
  actions: Action[]
}
