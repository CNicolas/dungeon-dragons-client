import { Player } from '@dungeon-dragons-model/player'

export class FetchPlayers {
  static readonly type = '[Player] Fetch players'
}

export class CreatePlayer {
  static readonly type = '[Player] Create player'

  constructor(public player: Player) {
  }
}
