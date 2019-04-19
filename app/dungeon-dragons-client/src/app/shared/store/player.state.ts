import { Player } from '@dungeon-dragons-model/player'
import { Selector, State } from '@ngxs/store'
import { PlayerStateModel } from './player.state.model'

@State<PlayerStateModel>({
  name: 'digitalNetwork',
  defaults: { player: null }
})
export class PlayerState {
  @Selector()
  static player(state: PlayerStateModel): Player {
    return state.player
  }
}
