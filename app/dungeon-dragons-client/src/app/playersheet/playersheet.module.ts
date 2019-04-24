import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { PlayerResolver } from './player.resolver'
import { PlayersheetComponent } from './playersheet.component'

@NgModule({
  declarations: [PlayersheetComponent],
  imports: [
    CommonModule
  ],
  providers: [PlayerResolver]
})
export class PlayersheetModule {
}
