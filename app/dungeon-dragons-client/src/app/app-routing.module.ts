import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CreatePlayerComponent } from './create-player/create-player.component'
import { HomeComponent } from './home/home.component'
import { PlayerResolver } from './playersheet/player.resolver'
import { PlayersheetComponent } from './playersheet/playersheet.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'create-player',
    component: CreatePlayerComponent
  },
  {
    path: 'player/:playerId',
    component: PlayersheetComponent,
    resolve: {
      player: PlayerResolver
    }
  },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
