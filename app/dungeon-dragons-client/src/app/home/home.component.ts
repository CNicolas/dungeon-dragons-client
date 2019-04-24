import { Component } from '@angular/core'
import { Player } from '@dungeon-dragons-model/player'
import { Select } from '@ngxs/store'
import { Observable } from 'rxjs'
import { PlayerState } from '../shared/store/player'

@Component({
  selector: 'dd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Select(PlayerState.players) players$: Observable<Player[]>

}
