import { BreakpointObserver } from '@angular/cdk/layout'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatDialog } from '@angular/material'
import { Weapon, WeaponRange } from '@dungeon-dragons-model/inventory'
import { DamageType } from '@dungeon-dragons-model/inventory/damage-type.enum'
import { getDamageCategoryByType } from '@dungeon-dragons-model/inventory/weapons.utils'
import { Player } from '@dungeon-dragons-model/player'
import { Characteristic } from '@dungeon-dragons-model/player/characteristic.enum'
import { filter } from 'rxjs/operators'
import { AbstractHandsetObserver } from '../../../core'
import { WeaponEditionDialogComponent } from './weapon-edition-dialog/weapon-edition-dialog.component'
import { WeaponRollDialogComponent } from './weapon-roll-dialog/weapon-roll-dialog.component'

@Component({
  selector: 'dd-player-inventory-weapons',
  templateUrl: './player-inventory-weapons.component.html',
  styleUrls: ['../../table.scss', './player-inventory-weapons.component.scss']
})
export class PlayerInventoryWeaponsComponent extends AbstractHandsetObserver {
  @Input() player: Player
  @Input() weapons: Weapon[] = []

  @Output() update: EventEmitter<Weapon[]> = new EventEmitter()

  get dialogMaxWidth(): string {
    return this.isHandset ? '80vw' : '50vw'
  }

  readonly weaponRanges: typeof WeaponRange = WeaponRange
  readonly characteristics: typeof Characteristic = Characteristic
  readonly damageTypes: typeof DamageType = DamageType
  readonly displayedColumns: string[] = ['name', 'range', 'touch', 'damage', 'damageType', 'characteristic', 'special', 'menu']

  constructor(private readonly dialog: MatDialog,
              breakpointObserver: BreakpointObserver) {
    super(breakpointObserver)
  }

  openWeaponEditionDialog(weapon: Weapon, weaponIndex: number) {
    const weaponEditionDialog = this.dialog.open(WeaponEditionDialogComponent, {
      autoFocus: false,
      data: { weapon },
      maxWidth: this.dialogMaxWidth
    })

    weaponEditionDialog.afterClosed()
      .pipe(filter((newWeapon: Weapon | -1) => !!newWeapon))
      .subscribe((newWeapon: Weapon | -1) => {
        if (newWeapon === -1) {
          this.weapons.splice(weaponIndex, 1)
        } else {
          if (!!!newWeapon.damageCategory) {
            newWeapon.damageCategory = getDamageCategoryByType(newWeapon.damageType)
          }
          this.weapons[weaponIndex] = newWeapon
        }

        this.update.emit([...this.weapons])
      })
  }

  openWeaponCreationDialog() {
    const weaponEditionDialog = this.dialog.open(WeaponEditionDialogComponent, {
      maxWidth: this.dialogMaxWidth
    })

    weaponEditionDialog.afterClosed()
      .pipe(filter((newWeapon: Weapon) => !!newWeapon))
      .subscribe((newWeapon: Weapon) => {
        if (!!!newWeapon.damageCategory) {
          newWeapon.damageCategory = getDamageCategoryByType(newWeapon.damageType)
        }
        this.update.emit([...this.weapons, newWeapon])
      })
  }

  openWeaponRollDialog(event: MouseEvent, weapon: Weapon) {
    event.stopPropagation()

    const weaponRollDialog = this.dialog.open(WeaponRollDialogComponent, {
      autoFocus: false,
      data: { player: this.player, weapon }
    })

    weaponRollDialog.afterClosed()
      .subscribe()
  }
}
