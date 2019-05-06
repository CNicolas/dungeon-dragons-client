import { HttpClientTestingModule } from '@angular/common/http/testing'
import { NgModule } from '@angular/core'
import { RouterTestingModule } from '@angular/router/testing'
import { NgxsModule } from '@ngxs/store'
import { PlayerStoreModule } from './player-store.module'
import { PlayerState } from './player.state'

@NgModule({
  imports: [
    HttpClientTestingModule,
    RouterTestingModule,
    NgxsModule.forRoot([PlayerState], { developmentMode: true }),
    PlayerStoreModule
  ]
})
export class PlayerStoreTestingModule {
}
