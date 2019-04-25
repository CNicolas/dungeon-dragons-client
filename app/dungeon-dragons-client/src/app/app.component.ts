import { BreakpointObserver } from '@angular/cdk/layout'
import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSidenav } from '@angular/material'
import { Player } from '@dungeon-dragons-model/player'
import { Select, Store } from '@ngxs/store'
import { Observable } from 'rxjs'
import { CoreState } from './shared/store/core/core.state'
import { FetchPlayers, PlayerState } from './shared/store/player'
import { AbstractHandsetObserver } from './shared/utils'

@Component({
  selector: 'dd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends AbstractHandsetObserver implements OnInit {

  @Select(CoreState.toolbarTitle) toolbarTitle$: Observable<string>
  @Select(PlayerState.player) player$: Observable<Player>

  player: Player

  @ViewChild('drawer') private drawer: MatSidenav

  constructor(private readonly store: Store,
              breakpointObserver: BreakpointObserver) {
    super(breakpointObserver)

    this.willUnsubscribe(
      this.player$.subscribe(player => this.player = player)
    )
  }

  ngOnInit() {
    this.store.dispatch(new FetchPlayers())
  }

  public closeDrawer(): void {
    if (this.isHandset) {
      this.drawer.toggle()
    }
  }
}
