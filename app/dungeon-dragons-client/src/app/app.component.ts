import { BreakpointObserver } from '@angular/cdk/layout'
import { Component, ViewChild } from '@angular/core'
import { MatSidenav } from '@angular/material'
import { Player } from '@dungeon-dragons-model/player'
import { Select } from '@ngxs/store'
import { Observable } from 'rxjs'
import { AbstractHandsetObserver } from './core'
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

  @ViewChild('drawer') private drawer: MatSidenav

  constructor(breakpointObserver: BreakpointObserver) {
    super(breakpointObserver)

    this.willUnsubscribe(
      this.player$.subscribe(player => this.player = player)
    )
  }

  public closeDrawer(): void {
    if (this.isHandset) {
      this.drawer.toggle()
    }
  }
}
