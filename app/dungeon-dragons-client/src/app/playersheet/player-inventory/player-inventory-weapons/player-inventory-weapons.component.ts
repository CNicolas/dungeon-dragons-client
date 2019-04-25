import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatDialog } from '@angular/material'
import { Weapon } from '@dungeon-dragons-model/inventory'
import { WeaponEditionDialogComponent } from './weapon-edition-dialog/weapon-edition-dialog.component'

@Component({
  selector: 'dd-player-inventory-weapons',
  templateUrl: './player-inventory-weapons.component.html',
  styleUrls: ['./player-inventory-weapons.component.scss']
})
export class PlayerInventoryWeaponsComponent {
  @Input() weapons: Weapon[] = []

  @Output() update: EventEmitter<Weapon[]> = new EventEmitter()

  readonly displayedColumns: string[] = ['name', 'range', 'touch', 'damage', 'special']

  constructor(private readonly dialog: MatDialog) {
  }

  openWeaponEditionDialog(weapon: Weapon, weaponIndex: number) {
    const weaponEditionDialog = this.dialog.open(WeaponEditionDialogComponent, {
      autoFocus: false,
      data: { weapon }
    })

    weaponEditionDialog.afterClosed()
      .subscribe((newWeapon: Weapon | -1) => {
        if (!!!newWeapon) {
          return
        }

        if (newWeapon === -1) {
          this.weapons.splice(weaponIndex, 1)
        } else {
          this.weapons[weaponIndex] = newWeapon
        }

        this.update.emit([...this.weapons])
      })
  }

  openWeaponCreationDialog() {
    const weaponEditionDialog = this.dialog.open(WeaponEditionDialogComponent)

    weaponEditionDialog.afterClosed()
      .subscribe((newWeapon: Weapon) => {
        this.update.emit([...this.weapons, newWeapon])
      })
  }
}