import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import {
  MatBadgeModule,
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatTooltipModule
} from '@angular/material'
import { PipesModule } from '../../shared/pipes/pipes.module'
import { CharacteristicControlComponent } from './characteristic-control/characteristic-control.component'
import { PlayerCharacteristicsComponent } from './player-characteristics.component'

const components = [
  PlayerCharacteristicsComponent,
  CharacteristicControlComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexModule,
    MatBadgeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    PipesModule
  ]
})
export class PlayerCharacteristicsModule {
}
