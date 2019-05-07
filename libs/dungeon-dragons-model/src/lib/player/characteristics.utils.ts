export function calculateModifier(characteristicValue: number): number {
  if (characteristicValue < 0) {
    throw new Error('Characteristic value cannot be under 0')
  }

  return Math.floor((characteristicValue - 10) / 2)
}
