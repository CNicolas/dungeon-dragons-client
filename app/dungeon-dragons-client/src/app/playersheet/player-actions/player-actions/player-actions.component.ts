import { BreakpointObserver } from '@angular/cdk/layout'
import { Component } from '@angular/core'
import { MatDialog } from '@angular/material'
import { Action } from '@dungeon-dragons-model/actions'
import { Player } from '@dungeon-dragons-model/player'
import { Select, Store } from '@ngxs/store'
import { Observable } from 'rxjs'
import { filter } from 'rxjs/operators'
import { AbstractHandsetObserver } from '../../../core'
import { PlayerState, UpdatePlayer } from '../../../shared/store/player'
import { ActionEditionDialogComponent } from './action-edition-dialog/action-edition-dialog.component'

@Component({
  selector: 'dd-player-actions',
  templateUrl: './player-actions.component.html',
  styleUrls: ['./player-actions.component.scss']
})
export class PlayerActionsComponent extends AbstractHandsetObserver {

  @Select(PlayerState.player) player$: Observable<Player>

  actions: Action[] = []

  get cols(): number {
    return this.isHandset ? 1 : 5
  }

  constructor(private readonly store: Store,
              private readonly dialog: MatDialog,
              breakpointObserver: BreakpointObserver) {
    super(breakpointObserver)

    this.willUnsubscribe(
      this.player$.subscribe(player => this.actions = player.actions)
    )
  }

  openActionEditionDialog(action: Action, actionIndex: number) {
    const actionEditionDialog = this.dialog.open(ActionEditionDialogComponent, {
      autoFocus: false,
      data: { action }
    })

    actionEditionDialog.afterClosed()
      .pipe(filter((newAction: Action | -1) => !!newAction))
      .subscribe((newAction: Action | -1) => {
        if (newAction === -1) {
          this.actions.splice(actionIndex, 1)
        } else {
          this.actions[actionIndex] = newAction
        }

        this.store.dispatch(new UpdatePlayer({ actions: [...this.actions] }))
      })
  }

  openActionCreationDialog() {
    const actionEditionDialog = this.dialog.open(ActionEditionDialogComponent)

    actionEditionDialog.afterClosed()
      .pipe(filter((newAction: Action) => !!newAction))
      .subscribe((newAction: Action) => {
        this.store.dispatch(new UpdatePlayer({ actions: [...this.actions, newAction] }))
      })
  }
}
