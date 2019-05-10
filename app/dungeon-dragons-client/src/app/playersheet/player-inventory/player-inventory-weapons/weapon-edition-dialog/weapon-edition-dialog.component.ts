import { Component, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Weapon, WeaponRange } from '@dungeon-dragons-model/inventory'
import { Characteristic } from '@dungeon-dragons-model/player/characteristic.enum'

@Component({
  selector: 'dd-weapon-edition-dialog',
  templateUrl: './weapon-edition-dialog.component.html',
  styleUrls: ['./weapon-edition-dialog.component.scss']
})
export class WeaponEditionDialogComponent {
  weapon: Weapon | null = null

  readonly weaponForm: FormGroup
  readonly weaponRanges: typeof WeaponRange = WeaponRange
  readonly characteristics: typeof Characteristic = Characteristic

  constructor(formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) data: { weapon: Weapon }) {
    this.weaponForm = formBuilder.group({
      name: [null, Validators.required],
      range: ['ENGAGED', Validators.required],
      touch: [0, Validators.required],
      damage: [0, Validators.required],
      characteristic: ['STRENGTH', Validators.required],
      special: ['']
    })

    if (!!data) {
      this.loadWeapon(data.weapon)
    }
  }

  private loadWeapon(weapon: Weapon) {
    if (!!weapon) {
      this.weaponForm.patchValue(weapon)

      this.weapon = weapon
    }
  }
}
