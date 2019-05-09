import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Player, Race } from '@dungeon-dragons-model/player'
import { Select, Store } from '@ngxs/store'
import * as deepEqual from 'fast-deep-equal'
import { Observable } from 'rxjs'
import { debounceTime } from 'rxjs/operators'
import { AbstractSubscriptionsDestroyer } from '../../core'
import { SnackBarHelper } from '../../shared/helpers/snack-bar.helper'
import { PlayerState, UpdatePlayer } from '../../shared/store/player'

@Component({
  selector: 'dd-player-characteristics',
  templateUrl: './player-characteristics.component.html',
  styleUrls: ['./player-characteristics.component.scss']
})
export class PlayerCharacteristicsComponent extends AbstractSubscriptionsDestroyer implements OnInit, OnDestroy {

  @Select(PlayerState.player) player$: Observable<Player>

  player: Player
  readonly playerForm: FormGroup
  readonly characteristicsForm: FormGroup

  readonly races: typeof Race = Race

  constructor(private readonly store: Store,
              private readonly snackBarHelper: SnackBarHelper,
              formBuilder: FormBuilder) {
    super()

    this.playerForm = formBuilder.group({
      name: ['', Validators.required],
      level: [null, Validators.required],
      race: [null, Validators.required],
      strength: [null, Validators.required],
      dexterity: [null, Validators.required],
      constitution: [null, Validators.required],
      intelligence: [null, Validators.required],
      wisdom: [null, Validators.required],
      charisma: [null, Validators.required]
    })

    this.characteristicsForm = this.playerForm.get('characteristics') as FormGroup

    this.willUnsubscribe(this.player$.subscribe(this.loadPlayer))
  }

  ngOnInit(): void {
    this.willUnsubscribe(
      this.playerForm.valueChanges.pipe(debounceTime(1000))
        .subscribe(() => this.savePlayer())
    )
  }

  ngOnDestroy(): void {
    super.ngOnDestroy()

    this.savePlayer()
  }

  loadPlayer = (player: Player): void => {
    this.player = player

    this.playerForm.patchValue(player)
  }

  private savePlayer(): void {
    if (!deepEqual(this.extractPlayerFromForm(), this.player)) {
      this.willUnsubscribe(
        this.store.dispatch(new UpdatePlayer(this.extractPlayerFromForm()))
          .subscribe(() => this.snackBarHelper.success('Sauvegarde effectuée'))
      )
    }
  }

  private extractPlayerFromForm(): Player {
    const formValue = this.playerForm.getRawValue()

    return {
      ...this.player,
      ...formValue
    }
  }
}
