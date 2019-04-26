import { Equipment, Expandable, OtherItem, Weapon } from '@dungeon-dragons-model/inventory'

export interface Player {
  id: number
  name: string
  race: string
  level: number
  weapons: Weapon[]
  equipments: Equipment[]
  expandables: Expandable[]
  otherItems: OtherItem[]
}
