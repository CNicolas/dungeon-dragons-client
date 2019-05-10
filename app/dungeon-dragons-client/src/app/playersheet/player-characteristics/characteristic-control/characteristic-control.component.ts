import { Component, Input, OnInit } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { calculateModifier, modifierToString } from '@dungeon-dragons-model/player/characteristics.utils'
import { PlayerCharacteristic } from '@dungeon-dragons-model/player/player'
import { AbstractSubscriptionsDestroyer } from '../../../core'

@Component({
  selector: 'dd-characteristic-control',
  templateUrl: './characteristic-control.component.html',
  styleUrls: ['./characteristic-control.component.scss']
})
export class CharacteristicControlComponent extends AbstractSubscriptionsDestroyer implements OnInit {
  @Input() placeholder: string
  @Input() characteristicControl: AbstractControl

  modifier: string
  readonly characteristicForm: FormGroup

  constructor(formBuilder: FormBuilder) {
    super()

    this.characteristicForm = formBuilder.group({
      value: [null, Validators.required],
      savingThrow: [false]
    })
  }

  ngOnInit() {
    this.characteristicForm.patchValue(this.characteristicControl.value)
    this.setModifier(this.characteristicForm.value.value)

    this.willUnsubscribe(
      this.characteristicForm.get('value').valueChanges
        .subscribe((newCharacteristicValue: number) => this.setModifier(newCharacteristicValue)),
      this.characteristicForm.valueChanges.subscribe((newCharacteristic: Partial<PlayerCharacteristic>) => {
        this.characteristicControl.patchValue({
          ...this.characteristicControl.value,
          value: newCharacteristic.value,
          savingThrow: newCharacteristic.savingThrow
        })
      })
    )
  }

  private setModifier(characteristic: number) {
    const newModifier: number = calculateModifier(characteristic)

    this.modifier = modifierToString(newModifier, true)
  }
}
