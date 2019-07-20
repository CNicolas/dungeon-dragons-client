import { Weapon } from "@dungeon-dragons-model/inventory";

export interface Action {
  name: string
  type: string
  level: number
  cooldown: number
  effect: string
}

export type Attack = Weapon