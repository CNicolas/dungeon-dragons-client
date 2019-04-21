import {NgModule} from '@angular/core'
import {HomeComponent} from './home.component'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ReactiveFormsModule} from '@angular/forms'
import {MatButtonModule, MatIconModule, MatInputModule} from '@angular/material'
import {NgxsModule} from '@ngxs/store'
import {PlayerState} from '../shared/store'

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    NgxsModule.forFeature([PlayerState])
  ],
})
export class HomeModule {
}
