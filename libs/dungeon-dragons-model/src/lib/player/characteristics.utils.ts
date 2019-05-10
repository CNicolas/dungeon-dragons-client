import { Characteristic } from '@dungeon-dragons-model/player/characteristic.enum'
import { Player, PlayerCharacteristic } from '@dungeon-dragons-model/player/player'

export function calculateModifier(characteristicValue: number): number {
  if (characteristicValue < 0) {
    throw new Error('Characteristic value cannot be under 0')
  }

  return Math.floor((characteristicValue - 10) / 2)
}

export function modifierToString(modifier: number, signed: boolean = false): string {
  return modifier >= 0 && signed ? `+${modifier}` : `${modifier}`
}

export function getPlayerCharacteristic(player: Player, characteristic: Characteristic): PlayerCharacteristic {
  switch (characteristic) {
    case Characteristic.STRENGTH:
      return player.characteristics.strength
    case Characteristic.CONSTITUTION:
      return player.characteristics.constitution
    case Characteristic.DEXTERITY:
      return player.characteristics.dexterity
    case Characteristic.INTELLIGENCE:
      return player.characteristics.intelligence
    case Characteristic.WISDOM:
      return player.characteristics.wisdom
    case Characteristic.CHARISMA:
      return player.characteristics.charisma
  }
}
