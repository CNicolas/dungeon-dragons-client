import { Action } from '@dungeon-dragons-model/actions'
import { Equipment, Expandable, OtherItem, Weapon } from '@dungeon-dragons-model/inventory'

export interface Player {
  name: string
  race: string
  level: number
  characteristics: PlayerCharacteristics
  weapons: Weapon[]
  equipments: Equipment[]
  expandables: Expandable[]
  otherItems: OtherItem[]
  actions: Action[],
  id?: number
}

export interface PlayerCharacteristics {
  strength: PlayerCharacteristic
  dexterity: PlayerCharacteristic
  constitution: PlayerCharacteristic
  intelligence: PlayerCharacteristic
  wisdom: PlayerCharacteristic
  charisma: PlayerCharacteristic,
  id?: number
}

export interface PlayerCharacteristic {
  characteristic: string
  value: number
  savingThrow: boolean
}
