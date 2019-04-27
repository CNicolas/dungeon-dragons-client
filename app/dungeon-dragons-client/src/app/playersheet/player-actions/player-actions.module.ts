import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PlayerActionsComponent } from './player-actions/player-actions.component'
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule } from '@angular/material'
import { FlexModule } from '@angular/flex-layout'
import { ActionEditionDialogComponent } from './player-actions/action-edition-dialog/action-edition-dialog.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [PlayerActionsComponent, ActionEditionDialogComponent],
  entryComponents: [ActionEditionDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule
  ]
})
export class PlayerActionsModule {
}
