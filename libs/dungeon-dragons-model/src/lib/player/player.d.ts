import { Weapon } from '@dungeon-dragons-model/inventory'

export interface Player {
  id: number
  name: string
  race: string
  level: number
  weapons: Weapon[]
}
