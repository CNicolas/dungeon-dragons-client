import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatRippleModule } from '@angular/material'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { NgxsModule } from '@ngxs/store'
import { PlayerState } from '../shared/store'
import { HomeComponent } from './home.component'

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
    MatRippleModule,
    NgxsModule.forFeature([PlayerState]),
    RouterModule
  ]
})
export class HomeModule {
}
