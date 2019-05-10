import { Player } from '@dungeon-dragons-model/player'

export const TESTING_PLAYER: Player = {
  id: 0,
  name: 'John Doe',
  race: 'DRAGONBORN',
  level: 1,
  bonus: 0,
  characteristics: {
    strength: { characteristic: 'STRENGTH', value: 10, savingThrow: false },
    dexterity: { characteristic: 'DEXTERITY', value: 10, savingThrow: false },
    constitution: { characteristic: 'CONSTITUTION', value: 10, savingThrow: false },
    intelligence: { characteristic: 'INTELLIGENCE', value: 10, savingThrow: false },
    wisdom: { characteristic: 'WISDOM', value: 10, savingThrow: false },
    charisma: { characteristic: 'CHARISMA', value: 10, savingThrow: false }
  },
  weapons: [],
  equipments: [],
  expandables: [],
  otherItems: [],
  actions: []
}
