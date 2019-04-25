import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxsModule } from '@ngxs/store'
import { PipesModule } from '../shared/pipes/pipes.module'
import { PlayerState } from '../shared/store/player'
import { CreatePlayerComponent } from './create-player.component'

@NgModule({
  declarations: [CreatePlayerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    NgxsModule.forFeature([PlayerState]),
    PipesModule
  ]
})
export class CreatePlayerModule {
}
