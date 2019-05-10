import { Pipe, PipeTransform } from '@angular/core'
import { modifierToString } from '@dungeon-dragons-model/player/characteristics.utils'

@Pipe({
  name: 'modifier'
})
export class CharacteristicModifierStringPipe implements PipeTransform {
  transform(modifier: number, signed?: boolean): string {
    return modifierToString(modifier, signed)
  }
}
