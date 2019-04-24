import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxsModule } from '@ngxs/store'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CreatePlayerModule } from './create-player/create-player.module'
import { HomeModule } from './home/home.module'
import { PlayersheetModule } from './playersheet/playersheet.module'
import { PlayerState } from './shared/store'
import { PlayerStoreModule } from './shared/store/player-store.module'

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
    MatSidenavModule,
    MatToolbarModule,
    NgxsModule.forRoot([PlayerState]),
    AppRoutingModule,
    PlayerStoreModule,
    ...appModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
