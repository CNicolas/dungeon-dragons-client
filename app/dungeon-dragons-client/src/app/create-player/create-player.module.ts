import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material'
import { NgxsModule } from '@ngxs/store'
import { PlayerState } from '../shared/store'
import { FlexLayoutModule } from '@angular/flex-layout'
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
    NgxsModule.forFeature([PlayerState])
  ]
})
export class CreatePlayerModule {
}
