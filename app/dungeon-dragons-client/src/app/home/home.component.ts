import {Component} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Player} from '@dungeon-dragons-model/player'
import {Select, Store} from '@ngxs/store'
import {PlayerState} from '../shared/store'
import {CreatePlayer, FetchPlayers} from '../shared/store/player.actions'
import {Observable} from 'rxjs'

@Component({
  selector: 'dd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Select(PlayerState.players) players$: Observable<Player[]>

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

  fetchPlayers() {
    this.store.dispatch(new FetchPlayers())
  }

}
