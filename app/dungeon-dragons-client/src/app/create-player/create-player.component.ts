import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Player, Race } from '@dungeon-dragons-model/player'
import { PlayerCharacteristics } from '@dungeon-dragons-model/player/player'
import { Store } from '@ngxs/store'
import { CreatePlayer } from '../shared/store/player'

@Component({
  selector: 'dd-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent {

  readonly createPlayerForm: FormGroup

  readonly races: typeof Race = Race

  constructor(private readonly store: Store,
              formBuilder: FormBuilder) {
    this.createPlayerForm = formBuilder.group({
      name: ['', [Validators.required]],
      race: ['', [Validators.required]]
    })
  }

  createPlayer() {
    const defaultPlayerCharacteristics: PlayerCharacteristics = {
      strength: { characteristic: 'STRENGTH', value: 10, savingThrow: false },
      dexterity: { characteristic: 'DEXTERITY', value: 10, savingThrow: false },
      constitution: { characteristic: 'CONSTITUTION', value: 10, savingThrow: false },
      intelligence: { characteristic: 'INTELLIGENCE', value: 10, savingThrow: false },
      wisdom: { characteristic: 'WISDOM', value: 10, savingThrow: false },
      charisma: { characteristic: 'CHARISMA', value: 10, savingThrow: false }
    }

    const newPlayer: Player = {
      name: this.createPlayerForm.get('name').value,
      race: this.createPlayerForm.get('race').value,
      level: 1,
      bonus: 0,
      physicalDamage: 0,
      magicalDamage: 0,
      characteristics: defaultPlayerCharacteristics,
      weapons: [],
      equipments: [],
      expandables: [],
      otherItems: [],
      actions: []
    }
    this.store.dispatch(new CreatePlayer(newPlayer))
  }
}
