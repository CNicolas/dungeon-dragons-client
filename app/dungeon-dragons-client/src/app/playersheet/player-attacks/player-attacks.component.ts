import { BreakpointObserver } from '@angular/cdk/layout'
import { Component } from '@angular/core'
import { MatDialog } from '@angular/material'
import { Player } from '@dungeon-dragons-model/player'
import { Select, Store } from '@ngxs/store'
import { Observable } from 'rxjs'
import { filter } from 'rxjs/operators'
import { AbstractHandsetObserver } from '../../core'
import { PlayerState, UpdatePlayer } from '../../shared/store/player'
import { Attack } from '@dungeon-dragons-model/actions';
import { AttackEditionDialogComponent } from './attack-edition-dialog/attack-edition-dialog.component';

@Component({
  selector: 'dd-player-attacks',
  templateUrl: './player-attacks.component.html',
  styleUrls: ['./player-attacks.component.scss']
})
export class PlayerAttacksComponent extends AbstractHandsetObserver {

  @Select(PlayerState.player) player$: Observable<Player>

  attacks: Attack[] = []

  get cols(): number {
    return this.isHandset ? 1 : 5
  }

  constructor(private readonly store: Store,
              private readonly dialog: MatDialog,
              breakpointObserver: BreakpointObserver) {
    super(breakpointObserver)

    this.willUnsubscribe(
      this.player$.subscribe(player => this.attacks = player.attacks)
    )
  }

  openAttackEditionDialog(attack: Attack, attackIndex: number) {
    const attackEditionDialog = this.dialog.open(AttackEditionDialogComponent, {
      autoFocus: false,
      data: { attack }
    })

    attackEditionDialog.afterClosed()
      .pipe(filter((newAttack: Attack | -1) => !!newAttack))
      .subscribe((newAttack: Attack | -1) => {
        if (newAttack === -1) {
          this.attacks.splice(attackIndex, 1)
        } else {
          this.attacks[attackIndex] = newAttack
        }

        this.store.dispatch(new UpdatePlayer({ attacks: [...this.attacks] }))
      })
  }

  openAttackCreationDialog() {
    const attackEditionDialog = this.dialog.open(AttackEditionDialogComponent)

    attackEditionDialog.afterClosed()
      .pipe(filter((newAttack: Attack) => !!newAttack))
      .subscribe((newAttack: Attack) => {
        this.store.dispatch(new UpdatePlayer({ attacks: [...this.attacks, newAttack] }))
      })
  }
}
