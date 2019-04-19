import { OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'

export abstract class AbstractSubscriptionDestroyer implements OnDestroy {

  protected subscriptions: Subscription[] = []

  public ngOnDestroy(): void {
    this.subscriptions.forEach(unsubscribe)
  }
}

function unsubscribe(subscription: Subscription): void {
  subscription.unsubscribe()
}
