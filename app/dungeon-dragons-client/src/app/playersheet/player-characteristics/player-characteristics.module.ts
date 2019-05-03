import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material'
import { CharacteristicControlComponent } from './characteristic-control/characteristic-control.component'
import { CharacteristicModifierComponent } from './characteristic-control/characteristic-modifier/characteristic-modifier.component'
import { CharacteristicsFormComponent } from './characteristics-form/characteristics-form.component'
import { PlayerCharacteristicsComponent } from './player-characteristics.component'

const components = [
  PlayerCharacteristicsComponent,
  CharacteristicsFormComponent
]

@NgModule({
  declarations: [...components, CharacteristicControlComponent, CharacteristicModifierComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class PlayerCharacteristicsModule {
}
