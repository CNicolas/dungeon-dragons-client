import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PlayerCharacteristicsComponent } from './player-characteristics/player-characteristics.component'

const routes: Routes = [
  {
    path: 'characteristics',
    component: PlayerCharacteristicsComponent
  },
  { path: '**', redirectTo: 'characteristics' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersheetRoutingModule {
}
