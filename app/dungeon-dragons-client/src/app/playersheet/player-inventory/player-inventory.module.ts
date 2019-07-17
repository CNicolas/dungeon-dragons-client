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
  MatSelectModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material'
import { PipesModule } from '../../shared/pipes/pipes.module'
import { EquipmentEditionDialogComponent, PlayerInventoryEquipmentsComponent } from './player-inventory-equipments'
import { ExpandableEditionDialogComponent, PlayerInventoryExpandablesComponent } from './player-inventory-expandables'
import { OtherItemEditionDialogComponent, PlayerInventoryOtherItemsComponent } from './player-inventory-other-items'
import { PlayerInventoryWeaponsComponent, WeaponEditionDialogComponent } from './player-inventory-weapons'
import { WeaponRollDialogComponent } from './player-inventory-weapons/weapon-roll-dialog/weapon-roll-dialog.component'
import { PlayerInventoryComponent } from './player-inventory.component'

const components = [
  PlayerInventoryComponent,
  PlayerInventoryEquipmentsComponent,
  PlayerInventoryExpandablesComponent,
  PlayerInventoryOtherItemsComponent,
  PlayerInventoryWeaponsComponent
]

const entryComponents = [
  EquipmentEditionDialogComponent,
  ExpandableEditionDialogComponent,
  OtherItemEditionDialogComponent,
  WeaponEditionDialogComponent,
  WeaponRollDialogComponent
]

@NgModule({
  declarations: [...components, ...entryComponents],
  entryComponents: [...entryComponents],
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
    MatTooltipModule,
    PipesModule
  ]
})
export class PlayerInventoryModule {
}
