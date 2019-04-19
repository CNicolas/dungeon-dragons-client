import { BreakpointObserver } from '@angular/cdk/layout'
import { Component, ViewChild } from '@angular/core'
import { MatSidenav } from '@angular/material'
import { AbstractHandsetObserver } from './shared/utils'

@Component({
  selector: 'dd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends AbstractHandsetObserver {

  @ViewChild('drawer') private drawer: MatSidenav

  constructor(breakpointObserver: BreakpointObserver) {
    super(breakpointObserver)
  }

  public closeDrawer(): void {
    if (this.isHandset) {
      this.drawer.toggle()
    }
  }
}
