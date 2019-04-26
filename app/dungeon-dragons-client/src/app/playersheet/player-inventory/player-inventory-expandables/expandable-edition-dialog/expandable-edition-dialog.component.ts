import { Component, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Expandable } from '@dungeon-dragons-model/inventory'

@Component({
  selector: 'dd-expandable-edition-dialog',
  templateUrl: './expandable-edition-dialog.component.html',
  styleUrls: ['./expandable-edition-dialog.component.scss']
})
export class ExpandableEditionDialogComponent {
  expandable: Expandable | null = null

  readonly expandableForm: FormGroup

  constructor(formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) data: { expandable: Expandable }) {
    this.expandableForm = formBuilder.group({
      name: [null, [Validators.required]],
      count: [1, [Validators.required]],
      special: ['']
    })

    if (!!data) {
      this.loadExpandable(data.expandable)
    }
  }

  private loadExpandable(expandable: Expandable) {
    if (!!expandable) {
      this.expandableForm.get('name').setValue(expandable.name)
      this.expandableForm.get('count').setValue(expandable.count)
      this.expandableForm.get('special').setValue(expandable.special)

      this.expandable = expandable
    }
  }
}
