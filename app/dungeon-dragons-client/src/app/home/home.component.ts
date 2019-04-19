import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Player } from '@dungeon-dragons-model/player'
import { Store } from '@ngxs/store'
import { PlayerState } from '../shared/store'
import { CreatePlayer, FetchPlayers } from '../shared/store/player.actions'

@Component({
  selector: 'dd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  players: Player[]

  readonly createPlayerForm: FormGroup

  constructor(private readonly store: Store,
              formBuilder: FormBuilder) {
    this.createPlayerForm = formBuilder.group({
      name: ['', [Validators.required]]
    })
  }

  ngOnInit() {
    this.store.select(PlayerState.players)
      .subscribe(players => this.players = players)
  }

  createPlayer() {
    this.store.dispatch(new CreatePlayer(this.createPlayerForm.getRawValue()))
  }

  fetchPlayers() {
    this.store.dispatch(new FetchPlayers())
  }

}
