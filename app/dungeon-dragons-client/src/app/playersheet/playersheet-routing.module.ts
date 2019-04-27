import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PlayerCharacteristicsComponent } from './player-characteristics/player-characteristics.component'
import { PlayerInventoryComponent } from './player-inventory/player-inventory.component'
import { PlayerActionsComponent } from './player-actions/player-actions/player-actions.component'

const routes: Routes = [
  {
    path: 'characteristics',
    component: PlayerCharacteristicsComponent
  },
  {
    path: 'actions',
    component: PlayerActionsComponent
  },
  {
    path: 'inventory',
    component: PlayerInventoryComponent
  },
  {path: '**', redirectTo: 'characteristics'}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersheetRoutingModule {
}
