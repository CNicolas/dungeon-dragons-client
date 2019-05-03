import { Component, Input, OnChanges } from '@angular/core'
import { calculateModifier } from '@dungeon-dragons-model/player/characteristics.utils'

@Component({
  selector: 'dd-characteristic-modifier',
  templateUrl: './characteristic-modifier.component.html',
  styleUrls: ['./characteristic-modifier.component.scss']
})
export class CharacteristicModifierComponent implements OnChanges {
  @Input() characteristicValue: number

  modifier: number

  ngOnChanges(): void {
    this.modifier = calculateModifier(this.characteristicValue)
  }
}
