import { Player } from '@dungeon-dragons-model/player'
import { Action, Selector, State, StateContext } from '@ngxs/store'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { CreatePlayer, FetchPlayers } from './player.actions'
import { PlayerGateway } from './player.gateway'
import { PlayerStateModel } from './player.state.model'

@State<PlayerStateModel>({
  name: 'digitalNetwork',
  defaults: {
    players: [],
    player: null
  }
})
export class PlayerState {
  constructor(private readonly playerGateway: PlayerGateway) {
  }

  @Selector()
  static player(state: PlayerStateModel): Player {
    return state.player
  }

  @Selector()
  static players(state: PlayerStateModel): Player[] {
    return state.players
  }

  @Action(FetchPlayers)
  fetchPlayers(ctx: StateContext<PlayerStateModel>): Observable<{}> {
    return this.playerGateway.fetchPlayers()
      .pipe(
        tap((players: Player[]) => ctx.patchState({ players }))
      )
  }


  @Action(CreatePlayer)
  createPlayer(ctx: StateContext<PlayerStateModel>, action: CreatePlayer): Observable<{}> {
    return this.playerGateway.createPlayer(action.player)
      .pipe(
        tap(() => ctx.dispatch(new FetchPlayers()))
      )
  }
}
