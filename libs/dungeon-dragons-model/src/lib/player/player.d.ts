import { Action, Attack } from '@dungeon-dragons-model/actions'
import { Equipment, Expandable, OtherItem, Weapon } from '@dungeon-dragons-model/inventory'
import { Characteristic } from '@dungeon-dragons-model/player/characteristic.enum'

export interface Player {
  name: string
  race: string
  level: number
  bonus: number
  physicalDamage: number
  magicalDamage: number
  characteristics: PlayerCharacteristics
  attacks?: Attack[]
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
  characteristic: keyof typeof Characteristic
  value: number
  savingThrow: boolean
}
