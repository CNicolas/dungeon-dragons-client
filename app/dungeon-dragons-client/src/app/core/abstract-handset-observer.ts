import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { AbstractSubscriptionsDestroyer } from './abstract-subscriptions-destroyer'

export abstract class AbstractHandsetObserver extends AbstractSubscriptionsDestroyer {
  public isHandset: boolean

  protected isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    )

  protected constructor(protected readonly breakpointObserver: BreakpointObserver) {
    super()

    this.willUnsubscribe(
      this.isHandset$.subscribe((handset: boolean) => this.isHandset = handset)
    )
  }
}
