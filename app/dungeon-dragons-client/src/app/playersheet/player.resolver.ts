import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Player } from '@dungeon-dragons-model/player'
import { Store } from '@ngxs/store'
import { Observable } from 'rxjs'
import { FetchPlayer } from '../shared/store/player.actions'

@Injectable()
export class PlayerResolver implements Resolve<Player> {
  constructor(private readonly store: Store) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Player> {
    return this.store.dispatch(new FetchPlayer(route.params.playerId))
  }
}
