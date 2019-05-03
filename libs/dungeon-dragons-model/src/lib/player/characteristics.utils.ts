import { CharacteristicValue } from '@dungeon-dragons-model/player/characteristics'

export function calculateModifier(characteristicValue: number): number {
  if (characteristicValue < 0) {
    throw new Error('Characteristic value cannot be under 0')
  }

  return Math.floor((characteristicValue - 10) / 2)
}

export function getCharacteristicValue(value: number): CharacteristicValue {
  return { value, modifier: calculateModifier(value) }
}
