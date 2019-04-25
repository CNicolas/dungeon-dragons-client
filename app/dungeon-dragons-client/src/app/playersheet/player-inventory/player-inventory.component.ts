import { Component } from '@angular/core'
import { Equipment, Weapon } from '@dungeon-dragons-model/inventory'
import { Player } from '@dungeon-dragons-model/player'
import { Select, Store } from '@ngxs/store'
import { Observable } from 'rxjs'
import { PlayerState, UpdatePlayer } from '../../shared/store/player'

@Component({
  selector: 'dd-player-inventory',
  templateUrl: './player-inventory.component.html',
  styleUrls: ['./player-inventory.component.scss']
})
export class PlayerInventoryComponent {
  @Select(PlayerState.player) player$: Observable<Player>

  constructor(private readonly store: Store) {
  }

  updatePlayerWeapons(weapons: Weapon[]) {
    this.store.dispatch(new UpdatePlayer({ weapons }))
  }

  updatePlayerEquipments(equipments: Equipment[]) {
    this.store.dispatch(new UpdatePlayer({ equipments }))
  }
}
