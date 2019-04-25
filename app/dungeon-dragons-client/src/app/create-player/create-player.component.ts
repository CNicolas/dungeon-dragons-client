import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Race } from '@dungeon-dragons-model/player'
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
    this.store.dispatch(new CreatePlayer(this.createPlayerForm.getRawValue()))
  }
}
