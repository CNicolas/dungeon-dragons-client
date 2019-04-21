import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CreatePlayer } from '../shared/store/player.actions'
import { Store } from '@ngxs/store'

@Component({
  selector: 'dd-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent {

  readonly createPlayerForm: FormGroup

  constructor(private readonly store: Store,
              formBuilder: FormBuilder) {
    this.createPlayerForm = formBuilder.group({
      name: ['', [Validators.required]]
    })
  }


  createPlayer() {
    this.store.dispatch(new CreatePlayer(this.createPlayerForm.getRawValue()))
  }
}
