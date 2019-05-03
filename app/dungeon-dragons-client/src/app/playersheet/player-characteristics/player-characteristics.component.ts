import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Player } from '@dungeon-dragons-model/player'
import { Select, Store } from '@ngxs/store'
import * as deepEqual from 'fast-deep-equal'
import { Observable } from 'rxjs'
import { debounceTime } from 'rxjs/operators'
import { AbstractSubscriptionsDestroyer } from '../../core'
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

  constructor(private readonly store: Store,
              formBuilder: FormBuilder) {
    super()

    this.playerForm = formBuilder.group({
      name: ['', Validators.required],
      characteristics: formBuilder.group({
        strength: [null, Validators.required],
        dexterity: [null, Validators.required],
        constitution: [null, Validators.required],
        intelligence: [null, Validators.required],
        wisdom: [null, Validators.required],
        charisma: [null, Validators.required]
      })
    })

    this.characteristicsForm = this.playerForm.get('characteristics') as FormGroup

    this.willUnsubscribe(this.player$.subscribe(this.loadPlayer))
  }

  ngOnInit(): void {
    this.willUnsubscribe(
      this.playerForm.valueChanges.pipe(debounceTime(2000))
        .subscribe(() => this.savePlayer())
    )
  }

  ngOnDestroy(): void {
    super.ngOnDestroy()

    this.savePlayer()
  }

  loadPlayer = (player: Player): void => {
    this.player = player

    this.playerForm.get('name').setValue(player.name)
    this.playerForm.get('characteristics').setValue(player.characteristics)
  }

  private savePlayer(): void {
    if (!deepEqual(this.extractPlayerFromForm(), this.player)) {
      this.store.dispatch(new UpdatePlayer(this.extractPlayerFromForm()))
    }
  }

  private extractPlayerFromForm(): Player {
    const formValue = this.playerForm.getRawValue()

    return {
      ...this.player,
      name: formValue.name,
      characteristics: formValue.characteristics
    }
  }
}
