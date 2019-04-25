import { NgZone } from '@angular/core'
import { Router } from '@angular/router'
import { Player } from '@dungeon-dragons-model/player'
import { Action, Selector, State, StateContext } from '@ngxs/store'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { SetToolbarTitle } from '../core/core.actions'
import { CreatePlayer, FetchPlayer, FetchPlayers, UpdatePlayer } from './player.actions'
import { PlayerGateway } from './player.gateway'
import { PlayerStateModel } from './player.state.model'

@State<PlayerStateModel>({
  name: 'player',
  defaults: {
    players: [],
    player: null
  }
})
export class PlayerState {
  constructor(private readonly router: Router,
              private readonly ngZone: NgZone,
              private readonly playerGateway: PlayerGateway) {
  }

  @Selector()
  static player(state: PlayerStateModel): Player {
    return state.player
  }

  @Selector()
  static players(state: PlayerStateModel): Player[] {
    return state.players
  }

  @Action(FetchPlayer)
  fetchPlayer(ctx: StateContext<PlayerStateModel>, action: FetchPlayer): Observable<{}> {
    return this.playerGateway.fetchPlayer(action.playerId)
      .pipe(
        tap((player: Player) => {
          ctx.patchState({ player })
          ctx.dispatch(new SetToolbarTitle(player.name))
        })
      )
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
        tap((player: Player) => {
          ctx.dispatch(new FetchPlayers())
          this.ngZone.run(() => this.router.navigate(['/player', player.id, 'characteristics']))
        })
      )
  }

  @Action(UpdatePlayer)
  updatePlayer(ctx: StateContext<PlayerStateModel>, action: UpdatePlayer): Observable<{}> {
    return this.playerGateway.updatePlayer({ ...ctx.getState().player, ...action.player })
      .pipe(
        tap((player: Player) => {
          ctx.patchState({ player })
          ctx.dispatch(new FetchPlayers())
          ctx.dispatch(new SetToolbarTitle(player.name))
        })
      )
  }
}
