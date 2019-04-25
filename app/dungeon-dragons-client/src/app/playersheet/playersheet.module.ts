import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material'
import { PlayerCharacteristicsComponent } from './player-characteristics/player-characteristics.component'
import { PlayerInventoryModule } from './player-inventory/player-inventory.module'
import { PlayerResolver } from './player.resolver'
import { PlayersheetRoutingModule } from './playersheet-routing.module'

@NgModule({
  declarations: [
    PlayerCharacteristicsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexModule,
    MatInputModule,
    PlayersheetRoutingModule,
    PlayerInventoryModule
  ],
  providers: [PlayerResolver]
})
export class PlayersheetModule {
}
