import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { MatInputModule, MatTabsModule } from '@angular/material'
import { PlayerCharacteristicsComponent } from './player-characteristics/player-characteristics.component'
import { PlayerResolver } from './player.resolver'
import { PlayersheetComponent } from './playersheet.component'

@NgModule({
  declarations: [PlayersheetComponent, PlayerCharacteristicsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    FlexModule,
    MatInputModule
  ],
  providers: [PlayerResolver]
})
export class PlayersheetModule {
}
