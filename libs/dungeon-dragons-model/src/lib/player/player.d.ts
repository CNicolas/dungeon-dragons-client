import { Action } from '@dungeon-dragons-model/actions'
import { Equipment, Expandable, OtherItem, Weapon } from '@dungeon-dragons-model/inventory'
import { CharacteristicValue } from '@dungeon-dragons-model/player/characteristics'

export interface Player {
  id: number
  name: string
  race: string
  level: number
  characteristics: PlayerCharacteristics
  weapons: Weapon[]
  equipments: Equipment[]
  expandables: Expandable[]
  otherItems: OtherItem[]
  actions: Action[]
}

export interface PlayerCharacteristics {
  strength: CharacteristicValue
  dexterity: CharacteristicValue
  constitution: CharacteristicValue
  intelligence: CharacteristicValue
  wisdom: CharacteristicValue
  charisma: CharacteristicValue
}
