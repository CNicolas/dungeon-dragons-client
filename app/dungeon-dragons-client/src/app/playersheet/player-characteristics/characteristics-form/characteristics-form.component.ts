import { Component, Input } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'dd-characteristics-form',
  templateUrl: './characteristics-form.component.html',
  styleUrls: ['./characteristics-form.component.scss']
})
export class CharacteristicsFormComponent {
  @Input() characteristicsForm: FormGroup
}
