import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { AbstractSubscriptionDestroyer } from './abstract-subscriptions-destroyer'

export abstract class AbstractHandsetObserver extends AbstractSubscriptionDestroyer {
  public isHandset: boolean

  protected isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    )

  protected constructor(protected readonly breakpointObserver: BreakpointObserver) {
    super()
  }

  protected subscribeToHandset() {
    this.subscriptions.push(
      this.isHandset$.subscribe((handset: boolean) => this.isHandset = handset)
    )
  }
}
