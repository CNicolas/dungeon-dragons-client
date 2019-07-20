import { Component, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material'
import {  WeaponRange } from '@dungeon-dragons-model/inventory'
import { DamageCategory } from '@dungeon-dragons-model/inventory/damage-category.enum'
import { DamageType } from '@dungeon-dragons-model/inventory/damage-type.enum'
import { Characteristic } from '@dungeon-dragons-model/player/characteristic.enum'
import { Attack } from '@dungeon-dragons-model/actions';

@Component({
  templateUrl: './attack-edition-dialog.component.html',
  styleUrls: ['./attack-edition-dialog.component.scss']
})
export class AttackEditionDialogComponent {
  weapon: Attack | null = null

  readonly weaponForm: FormGroup
  readonly weaponRanges: typeof WeaponRange = WeaponRange
  readonly characteristics: typeof Characteristic = Characteristic
  readonly damageTypes: typeof DamageType = DamageType
  readonly damageCategories: typeof DamageCategory = DamageCategory

  constructor(formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) data: { weapon: Attack }) {
    this.weaponForm = formBuilder.group({
      name: [null, Validators.required],
      range: ['ENGAGED', Validators.required],
      touch: [0, Validators.required],
      damage: [0, Validators.required],
      damageType: [null, Validators.required],
      damageCategory: [null],
      characteristic: ['STRENGTH', Validators.required],
      special: ['']
    })

    if (!!data) {
      this.loadAttack(data.weapon)
    }
  }

  private loadAttack(weapon: Attack) {
    if (!!weapon) {
      this.weaponForm.patchValue(weapon)

      this.weapon = weapon
    }
  }
}
