import { Component, Input, OnInit } from '@angular/core'
import { AbstractControl } from '@angular/forms'
import { calculateModifier } from '@dungeon-dragons-model/player/characteristics.utils'
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

  ngOnInit() {
    this.willUnsubscribe(
      this.characteristicControl.valueChanges.subscribe((newCharacteristicValue: number) => {
        this.setModifier(newCharacteristicValue)
      })
    )

    this.setModifier(this.characteristicControl.value)
  }

  private setModifier(characteristicValue) {
    const newModifier: number = calculateModifier(characteristicValue)

    if (newModifier > 0) {
      this.modifier = `+${newModifier}`
    } else {
      this.modifier = `${newModifier}`
    }
  }
}
