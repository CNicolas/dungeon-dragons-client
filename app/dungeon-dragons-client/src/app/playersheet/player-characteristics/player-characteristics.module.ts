import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { MatBadgeModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material'
import { CharacteristicControlComponent } from './characteristic-control/characteristic-control.component'
import { CharacteristicModifierComponent } from './characteristic-control/characteristic-modifier/characteristic-modifier.component'
import { PlayerCharacteristicsComponent } from './player-characteristics.component'

const components = [
  PlayerCharacteristicsComponent,
  CharacteristicControlComponent,
  CharacteristicModifierComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexModule,
    MatBadgeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class PlayerCharacteristicsModule {
}
