import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Player } from '@dungeon-dragons-model/player'
import { Select, Store } from '@ngxs/store'
import { Observable } from 'rxjs'
import { PlayerState } from '../../shared/store/player'

@Component({
  selector: 'dd-player-characteristics',
  templateUrl: './player-characteristics.component.html',
  styleUrls: ['./player-characteristics.component.scss']
})
export class PlayerCharacteristicsComponent {

  @Select(PlayerState.player) player$: Observable<Player>

  public player: Player
  public playerForm: FormGroup

  constructor(private readonly store: Store,
              formBuilder: FormBuilder) {
    this.playerForm = formBuilder.group({
      name: ['', Validators.required]
    })

    this.player$.subscribe(this.loadPlayer)
  }

  loadPlayer = (player: Player) => {
    this.player = player

    this.playerForm.get('name').setValue(player.name)
  }

  savePlayer() {
    console.log(this.playerForm.getRawValue())
  }
}
