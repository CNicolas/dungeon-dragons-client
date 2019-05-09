import { Player, Race } from '@dungeon-dragons-model/player'
import { Characteristic } from '@dungeon-dragons-model/player/characteristic.enum'

export const TESTING_PLAYER: Player = {
  id: 0,
  name: 'John Doe',
  race: Race.DRAGONBORN,
  level: 1,
  characteristics: {
    strength: { characteristic: Characteristic.STRENGTH, value: 10, savingThrow: false },
    dexterity: { characteristic: Characteristic.DEXTERITY, value: 10, savingThrow: false },
    constitution: { characteristic: Characteristic.CONSTITUTION, value: 10, savingThrow: false },
    intelligence: { characteristic: Characteristic.INTELLIGENCE, value: 10, savingThrow: false },
    wisdom: { characteristic: Characteristic.WISDOM, value: 10, savingThrow: false },
    charisma: { characteristic: Characteristic.CHARISMA, value: 10, savingThrow: false }
  },
  weapons: [],
  equipments: [],
  expandables: [],
  otherItems: [],
  actions: []
}
