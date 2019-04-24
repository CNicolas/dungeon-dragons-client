import { Component } from '@angular/core'
import { Player } from '@dungeon-dragons-model/player'
import { Select, Store } from '@ngxs/store'
import { Observable } from 'rxjs'
import { PlayerState } from '../shared/store/player'

@Component({
  selector: 'dd-playersheet',
  templateUrl: './playersheet.component.html',
  styleUrls: ['./playersheet.component.scss']
})
export class PlayersheetComponent {

  @Select(PlayerState.player) player$: Observable<Player>

  public player: Player

  constructor(private readonly store: Store) {
    this.player$.subscribe((player: Player) => this.player = player)
  }

}
