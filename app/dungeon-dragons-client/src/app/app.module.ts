import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatRippleModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxsModule } from '@ngxs/store'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DdCoreModule } from './core/dd-core.module'
import { CreatePlayerModule } from './create-player/create-player.module'
import { HomeModule } from './home/home.module'
import { PlayersheetModule } from './playersheet/playersheet.module'
import { CoreState } from './shared/store/core/core.state'
import { PlayerState, PlayerStoreModule } from './shared/store/player'

const appModules = [HomeModule, CreatePlayerModule, PlayersheetModule]

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule,
    NgxsModule.forRoot([CoreState, PlayerState]),
    DdCoreModule,
    AppRoutingModule,
    PlayerStoreModule,
    ...appModules,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
