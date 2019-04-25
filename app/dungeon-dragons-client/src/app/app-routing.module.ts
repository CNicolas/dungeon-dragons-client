import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { CreatePlayerComponent } from './create-player/create-player.component'
import { HomeComponent } from './home/home.component'
import { PlayerResolver } from './playersheet/player.resolver'
import { PlayersheetModule } from './playersheet/playersheet.module'

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
    resolve: {
      player: PlayerResolver
    },
    loadChildren: () => PlayersheetModule
  },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
