import { NgModule } from '@angular/core'
import { EnumKeyValuePipe } from './enum-key-value.pipe'
import { EnumValuePipe } from './enum-value.pipe'
import { SortPipe } from './sort.pipe'

const pipes = [
  SortPipe,
  EnumKeyValuePipe,
  EnumValuePipe
]

@NgModule({
  declarations: [...pipes],
  exports: [...pipes]
})
export class PipesModule {
}
