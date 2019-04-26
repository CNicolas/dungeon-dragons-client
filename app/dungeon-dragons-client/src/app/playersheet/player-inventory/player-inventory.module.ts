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
import { EquipmentEditionDialogComponent, PlayerInventoryEquipmentsComponent } from './player-inventory-equipments'
import { ExpandableEditionDialogComponent, PlayerInventoryExpandablesComponent } from './player-inventory-expandables'
import { PlayerInventoryWeaponsComponent, WeaponEditionDialogComponent } from './player-inventory-weapons'
import { PlayerInventoryComponent } from './player-inventory.component'

@NgModule({
  declarations: [
    PlayerInventoryComponent,
    PlayerInventoryWeaponsComponent,
    WeaponEditionDialogComponent,
    PlayerInventoryEquipmentsComponent,
    EquipmentEditionDialogComponent,
    PlayerInventoryExpandablesComponent,
    ExpandableEditionDialogComponent
  ],
  entryComponents: [WeaponEditionDialogComponent, EquipmentEditionDialogComponent, ExpandableEditionDialogComponent],
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
