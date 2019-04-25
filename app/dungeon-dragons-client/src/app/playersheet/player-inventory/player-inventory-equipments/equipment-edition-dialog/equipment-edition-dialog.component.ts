import { Component, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Equipment } from '@dungeon-dragons-model/inventory'

@Component({
  selector: 'dd-equipment-edition-dialog',
  templateUrl: './equipment-edition-dialog.component.html',
  styleUrls: ['./equipment-edition-dialog.component.scss']
})
export class EquipmentEditionDialogComponent {
  equipment: Equipment | null = null

  readonly equipmentForm: FormGroup

  constructor(formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) data: { equipment: Equipment }) {
    this.equipmentForm = formBuilder.group({
      name: [null, [Validators.required]],
      armor: [0, [Validators.required]],
      special: ['']
    })

    if (!!data) {
      this.loadEquipment(data.equipment)
    }
  }

  private loadEquipment(equipment: Equipment) {
    if (!!equipment) {
      this.equipmentForm.get('name').setValue(equipment.name)
      this.equipmentForm.get('armor').setValue(equipment.armor)
      this.equipmentForm.get('special').setValue(equipment.special)

      this.equipment = equipment
    }
  }
}
