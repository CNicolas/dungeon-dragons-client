import {NgModule} from '@angular/core'
import {HomeComponent} from './home.component'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ReactiveFormsModule} from '@angular/forms'
import {MatButtonModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material'
import {NgxsModule} from '@ngxs/store'
import {PlayerState} from '../shared/store'
import {FlexLayoutModule} from '@angular/flex-layout'

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    NgxsModule.forFeature([PlayerState])
  ]
})
export class HomeModule {
}
