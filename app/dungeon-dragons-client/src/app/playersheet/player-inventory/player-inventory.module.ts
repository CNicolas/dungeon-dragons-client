import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import {
  MatButtonModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material'
import { PipesModule } from '../../shared/pipes/pipes.module'
import { PlayerInventoryWeaponsComponent } from './player-inventory-weapons/player-inventory-weapons.component'
import { WeaponEditionDialogComponent } from './player-inventory-weapons/weapon-edition-dialog/weapon-edition-dialog.component'
import { PlayerInventoryComponent } from './player-inventory.component'

@NgModule({
  declarations: [
    PlayerInventoryComponent,
    PlayerInventoryWeaponsComponent,
    WeaponEditionDialogComponent
  ],
  entryComponents: [WeaponEditionDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    PipesModule,
    MatMenuModule
  ]
})
export class PlayerInventoryModule {
}
