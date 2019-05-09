import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material'
import { ActionEditionDialogComponent } from './player-actions/action-edition-dialog/action-edition-dialog.component'
import { PlayerActionsComponent } from './player-actions/player-actions.component'

@NgModule({
  declarations: [PlayerActionsComponent, ActionEditionDialogComponent],
  entryComponents: [ActionEditionDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
    MatGridListModule,
    MatBadgeModule
  ]
})
export class PlayerActionsModule {
}
