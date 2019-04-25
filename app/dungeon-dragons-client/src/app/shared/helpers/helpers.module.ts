import { NgModule } from '@angular/core'
import { MatSnackBarModule } from '@angular/material'
import { SnackBarHelper } from './snack-bar.helper'

@NgModule({
  imports: [MatSnackBarModule],
  providers: [SnackBarHelper]
})
export class HelpersModule {
}
