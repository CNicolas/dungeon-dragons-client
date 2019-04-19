import { OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'

export abstract class AbstractSubscriptionsDestroyer implements OnDestroy {
  private subscriptions: Subscription[] = []

  ngOnDestroy() {
    this.subscriptions.forEach(unsubscribe)
  }

  protected willUnsubscribe(...subscriptions: Subscription[]) {
    this.subscriptions.push(...subscriptions)
  }
}

function unsubscribe(subscription: Subscription): void {
  subscription.unsubscribe()
}
