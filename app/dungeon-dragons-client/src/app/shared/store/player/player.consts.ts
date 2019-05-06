import { Player, Race } from '@dungeon-dragons-model/player'

export const TESTING_PLAYER: Player = {
  id: 0,
  name: 'John Doe',
  race: Race.DRAGONBORN,
  level: 1,
  characteristics: {
    strength: { value: 10, modifier: 0 },
    dexterity: { value: 10, modifier: 0 },
    constitution: { value: 10, modifier: 0 },
    intelligence: { value: 10, modifier: 0 },
    wisdom: { value: 10, modifier: 0 },
    charisma: { value: 10, modifier: 0 }
  },
  weapons: [],
  equipments: [],
  expandables: [],
  otherItems: [],
  actions: []
}
