import { NgModule } from '@angular/core'
import { CharacteristicModifierStringPipe } from './characteristic-modifier-string.pipe'
import { EnumKeyValuePipe } from './enum-key-value.pipe'
import { EnumValuePipe } from './enum-value.pipe'
import { SortPipe } from './sort.pipe'

const pipes = [
  SortPipe,
  EnumKeyValuePipe,
  EnumValuePipe,
  CharacteristicModifierStringPipe
]

@NgModule({
  declarations: [...pipes],
  exports: [...pipes]
})
export class PipesModule {
}
