import { Player } from '@dungeon-dragons-model/player'

export class FetchPlayer {
  static readonly type = '[Player] Fetch player'

  constructor(public playerId: number) {
  }
}

export class FetchPlayers {
  static readonly type = '[Player] Fetch players'
}

export class CreatePlayer {
  static readonly type = '[Player] Create player'

  constructor(public player: Player) {
  }
}

export class UpdatePlayer {
  static readonly type = '[Player] Update player'

  constructor(public player: Player) {
  }
}
