import {BreakpointObserver} from '@angular/cdk/layout'
import {Component, OnInit, ViewChild} from '@angular/core'
import {MatSidenav} from '@angular/material'
import {AbstractHandsetObserver} from './shared/utils'
import {FetchPlayers} from './shared/store/player.actions'
import {Store} from '@ngxs/store'

@Component({
  selector: 'dd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends AbstractHandsetObserver implements OnInit {

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
