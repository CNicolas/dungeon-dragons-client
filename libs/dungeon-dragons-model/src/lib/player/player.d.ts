import { Action } from '@dungeon-dragons-model/actions'
import { Equipment, Expandable, OtherItem, Weapon } from '@dungeon-dragons-model/inventory'

export interface Player {
  name: string
  race: string
  level: number
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
  weapons: Weapon[]
  equipments: Equipment[]
  expandables: Expandable[]
  otherItems: OtherItem[]
  actions: Action[],
  id: number
}
