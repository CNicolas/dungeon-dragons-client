import { Component, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material'
import { OtherItem } from '@dungeon-dragons-model/inventory'

@Component({
  selector: 'dd-otheritem-edition-dialog',
  templateUrl: './otheritem-edition-dialog.component.html',
  styleUrls: ['./otheritem-edition-dialog.component.scss']
})
export class OtherItemEditionDialogComponent {
  otherItem: OtherItem | null = null

  readonly otherItemForm: FormGroup

  constructor(formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) data: { otherItem: OtherItem }) {
    this.otherItemForm = formBuilder.group({
      name: [null, [Validators.required]],
      special: ['']
    })

    if (!!data) {
      this.loadOtherItem(data.otherItem)
    }
  }

  private loadOtherItem(otherItem: OtherItem) {
    if (!!otherItem) {
      this.otherItemForm.get('name').setValue(otherItem.name)
      this.otherItemForm.get('special').setValue(otherItem.special)

      this.otherItem = otherItem
    }
  }
}
