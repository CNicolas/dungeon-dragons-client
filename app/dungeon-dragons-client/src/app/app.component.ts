import { BreakpointObserver } from '@angular/cdk/layout'
import { Component, ViewChild } from '@angular/core'
import { MatSidenav } from '@angular/material'
import { DicesRollResults } from '@dungeon-dragons-model/dice'
import { Player } from '@dungeon-dragons-model/player'
import { Select } from '@ngxs/store'
import DiceRoller from 'roll'
import { Observable } from 'rxjs'
import { AbstractHandsetObserver } from './core'
import { SnackBarHelper } from './shared/helpers/snack-bar.helper'
import { CoreState } from './shared/store/core/core.state'
import { PlayerState } from './shared/store/player'

@Component({
  selector: 'dd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends AbstractHandsetObserver {

  @Select(CoreState.toolbarTitle) toolbarTitle$: Observable<string>
  @Select(PlayerState.player) player$: Observable<Player>

  player: Player
  rollText: string

  @ViewChild('drawer') private drawer: MatSidenav

  readonly diceRoller: DiceRoller = new DiceRoller()

  constructor(private readonly snackBarHelper: SnackBarHelper,
              breakpointObserver: BreakpointObserver) {
    super(breakpointObserver)

    this.willUnsubscribe(
      this.player$.subscribe(player => this.player = player)
    )
  }

  closeDrawer(): void {
    if (this.isHandset) {
      this.drawer.toggle()
    }
  }

  roll() {
    const result: DicesRollResults = this.diceRoller.roll(this.rollText)
    this.snackBarHelper.success(`${result.rolled}`)
  }
}
