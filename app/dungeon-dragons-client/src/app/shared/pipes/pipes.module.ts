import { NgModule } from '@angular/core'
import { EnumKeyValuePipe } from './enum-key-value.pipe'
import { SortPipe } from './sort.pipe'

const pipes = [SortPipe, EnumKeyValuePipe]

@NgModule({
  declarations: [...pipes],
  exports: [...pipes]
})
export class PipesModule {
}
