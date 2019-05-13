import { DamageCategory } from '@dungeon-dragons-model/inventory/damage-category.enum'
import { DamageType } from '@dungeon-dragons-model/inventory/damage-type.enum'

export function getDamageCategoryByType(damageType: keyof typeof DamageType): keyof typeof DamageCategory {
  switch (damageType) {
    case 'BLUDGEONING':
    case 'PIERCING':
    case 'SLASHING':
      return 'PHYSICAL'
    case 'ACID':
    case 'COLD':
    case 'FIRE':
    case 'FORCE':
    case 'LIGHTNING':
    case 'NECROTIC':
    case 'POISON':
    case 'PSYCHIC':
    case 'LIGHT':
    case 'SOUND':
      return 'MAGICAL'
  }
}

export function getDamageCategoryByTypeLabel(damageType: DamageType): keyof typeof DamageCategory {
  switch (damageType) {
    case DamageType.BLUDGEONING:
    case DamageType.PIERCING:
    case DamageType.SLASHING:
      return 'PHYSICAL'
    case DamageType.ACID:
    case DamageType.COLD:
    case DamageType.FIRE:
    case DamageType.FORCE:
    case DamageType.LIGHTNING:
    case DamageType.NECROTIC:
    case DamageType.POISON:
    case DamageType.PSYCHIC:
    case DamageType.LIGHT:
    case DamageType.SOUND:
      return 'MAGICAL'
  }
}

export function getDamageTypesOfCategory(damageCategory: keyof typeof DamageCategory): (keyof typeof DamageType)[] {
  return damageCategory === 'PHYSICAL'
    ? ['BLUDGEONING', 'PIERCING', 'SLASHING']
    : ['ACID', 'COLD', 'FIRE', 'FORCE', 'LIGHTNING', 'NECROTIC', 'POISON', 'PSYCHIC', 'LIGHT', 'SOUND']
}
