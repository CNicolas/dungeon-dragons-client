import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Player, Race } from '@dungeon-dragons-model/player'
import { Store } from '@ngxs/store'
import { CreatePlayer } from '../shared/store/player'

@Component({
  selector: 'dd-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent {

  readonly createPlayerForm: FormGroup

  readonly races: typeof Race = Race

  constructor(private readonly store: Store,
              formBuilder: FormBuilder) {
    this.createPlayerForm = formBuilder.group({
      name: ['', [Validators.required]],
      race: ['', [Validators.required]]
    })
  }

  createPlayer() {
    const newPlayer: Player = {
      ...this.createPlayerForm.getRawValue(),
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10
    }
    this.store.dispatch(new CreatePlayer(newPlayer))
  }
}
