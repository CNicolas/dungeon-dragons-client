import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material'
import { PlayerActionsModule } from './player-actions/player-actions.module'
import { PlayerCharacteristicsModule } from './player-characteristics/player-characteristics.module'
import { PlayerInventoryModule } from './player-inventory/player-inventory.module'
import { PlayerResolver } from './player.resolver'
import { PlayersheetRoutingModule } from './playersheet-routing.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexModule,
    MatInputModule,
    PlayersheetRoutingModule,
    PlayerCharacteristicsModule,
    PlayerInventoryModule,
    PlayerActionsModule
  ],
  providers: [PlayerResolver]
})
export class PlayersheetModule {
}
