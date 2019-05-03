import { Component, Input } from '@angular/core'
import { AbstractControl } from '@angular/forms'

@Component({
  selector: 'dd-characteristic-control',
  templateUrl: './characteristic-control.component.html',
  styleUrls: ['./characteristic-control.component.scss']
})
export class CharacteristicControlComponent {
  @Input() placeholder: string
  @Input() characteristicControl: AbstractControl
}
