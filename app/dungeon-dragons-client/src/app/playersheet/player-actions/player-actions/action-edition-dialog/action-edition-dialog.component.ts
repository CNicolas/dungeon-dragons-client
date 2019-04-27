import { Component, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Action } from '@dungeon-dragons-model/actions'

@Component({
  selector: 'dd-action-edition-dialog',
  templateUrl: './action-edition-dialog.component.html',
  styleUrls: ['./action-edition-dialog.component.scss']
})
export class ActionEditionDialogComponent {
  action: Action | null = null

  readonly actionForm: FormGroup

  constructor(formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) data: { action: Action }) {
    this.actionForm = formBuilder.group({
      name: [null, [Validators.required]],
      type: [''],
      level: [0, [Validators.required]],
      cooldown: [0, [Validators.required]],
      effect: ['']
    })

    if (!!data) {
      this.loadAction(data.action)
    }
  }

  private loadAction(action: Action) {
    if (!!action) {
      this.actionForm.get('name').setValue(action.name)
      this.actionForm.get('type').setValue(action.type)
      this.actionForm.get('level').setValue(action.level)
      this.actionForm.get('cooldown').setValue(action.cooldown)
      this.actionForm.get('effect').setValue(action.effect)

      this.action = action
    }
  }
}
