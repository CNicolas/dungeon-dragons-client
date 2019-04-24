import { BreakpointObserver } from '@angular/cdk/layout'
import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSidenav } from '@angular/material'
import { Select, Store } from '@ngxs/store'
import { Observable } from 'rxjs'
import { CoreState } from './shared/store/core/core.state'
import { FetchPlayers } from './shared/store/player'
import { AbstractHandsetObserver } from './shared/utils'

@Component({
  selector: 'dd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends AbstractHandsetObserver implements OnInit {

  @Select(CoreState.toolbarTitle) toolbarTitle$: Observable<string>

  @ViewChild('drawer') private drawer: MatSidenav

  constructor(private readonly store: Store,
              breakpointObserver: BreakpointObserver) {
    super(breakpointObserver)
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
