import { Component, OnInit } from '@angular/core'
import { Player } from '@dungeon-dragons-model/player'
import { Select, Store } from '@ngxs/store'
import { Observable } from 'rxjs'
import { FetchPlayers, PlayerState } from '../shared/store/player'

@Component({
  selector: 'dd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Select(PlayerState.players) players$: Observable<Player[]>

  constructor(private readonly store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new FetchPlayers())
  }
}
