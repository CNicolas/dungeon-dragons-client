import { Component } from '@angular/core'
import { PlayerState, UpdatePlayer } from '../../../shared/store/player'
import { Select, Store } from '@ngxs/store'
import { Observable } from 'rxjs'
import { Player } from '@dungeon-dragons-model/player'
import { AbstractSubscriptionsDestroyer } from '../../../core'
import { filter } from 'rxjs/operators'
import { Action } from '@dungeon-dragons-model/actions'
import { MatDialog } from '@angular/material'
import { ActionEditionDialogComponent } from './action-edition-dialog/action-edition-dialog.component'

@Component({
  selector: 'dd-player-actions',
  templateUrl: './player-actions.component.html',
  styleUrls: ['../../table.scss', './player-actions.component.scss']
})
export class PlayerActionsComponent extends AbstractSubscriptionsDestroyer {

  @Select(PlayerState.player) player$: Observable<Player>

  actions: Action[] = []

  readonly displayedColumns: string[] = ['name', 'type', 'level', 'cooldown', 'effect']

  constructor(private readonly store: Store,
              private readonly dialog: MatDialog) {
    super()

    this.willUnsubscribe(
      this.player$.subscribe(player => this.actions = player.actions)
    )
  }

  openActionEditionDialog(action: Action, actionIndex: number) {
    const actionEditionDialog = this.dialog.open(ActionEditionDialogComponent, {
      autoFocus: false,
      data: {action}
    })

    actionEditionDialog.afterClosed()
      .pipe(filter((newAction: Action | -1) => !!newAction))
      .subscribe((newAction: Action | -1) => {
        if (newAction === -1) {
          this.actions.splice(actionIndex, 1)
        } else {
          this.actions[actionIndex] = newAction
        }

        this.store.dispatch(new UpdatePlayer({actions: [...this.actions]}))
      })
  }

  openActionCreationDialog() {
    const actionEditionDialog = this.dialog.open(ActionEditionDialogComponent)

    actionEditionDialog.afterClosed()
      .pipe(filter((newAction: Action) => !!newAction))
      .subscribe((newAction: Action) => {
        this.store.dispatch(new UpdatePlayer({actions: [...this.actions, newAction]}))
      })
  }
}
