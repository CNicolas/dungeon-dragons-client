import { BreakpointObserver } from '@angular/cdk/layout'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatDialog } from '@angular/material'
import { Equipment } from '@dungeon-dragons-model/inventory'
import { filter } from 'rxjs/operators'
import { AbstractHandsetObserver } from '../../../core'
import { EquipmentEditionDialogComponent } from './equipment-edition-dialog/equipment-edition-dialog.component'

@Component({
  selector: 'dd-player-inventory-equipments',
  templateUrl: './player-inventory-equipments.component.html',
  styleUrls: ['../../table.scss', './player-inventory-equipments.component.scss']
})
export class PlayerInventoryEquipmentsComponent extends AbstractHandsetObserver {
  @Input() equipments: Equipment[] = []

  @Output() update: EventEmitter<Equipment[]> = new EventEmitter()

  readonly displayedColumns: string[] = ['name', 'armor', 'special']

  constructor(private readonly dialog: MatDialog,
              breakpointObserver: BreakpointObserver) {
    super(breakpointObserver)
  }

  openEquipmentEditionDialog(equipment: Equipment, equipmentIndex: number) {
    const equipmentEditionDialog = this.dialog.open(EquipmentEditionDialogComponent, {
      autoFocus: false,
      data: {equipment}
    })

    equipmentEditionDialog.afterClosed()
      .pipe(filter((newEquipment: Equipment | -1) => !!newEquipment))
      .subscribe((newEquipment: Equipment | -1) => {
        if (newEquipment === -1) {
          this.equipments.splice(equipmentIndex, 1)
        } else {
          this.equipments[equipmentIndex] = newEquipment
        }

        this.update.emit([...this.equipments])
      })
  }

  openEquipmentCreationDialog() {
    const equipmentEditionDialog = this.dialog.open(EquipmentEditionDialogComponent)

    equipmentEditionDialog.afterClosed()
      .pipe(filter((newEquipment: Equipment) => !!newEquipment))
      .subscribe((newEquipment: Equipment) => {
        this.update.emit([...this.equipments, newEquipment])
      })
  }
}
