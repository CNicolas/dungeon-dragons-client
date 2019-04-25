import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatDialog } from '@angular/material'
import { Equipment } from '@dungeon-dragons-model/inventory'
import { EquipmentEditionDialogComponent } from './equipment-edition-dialog/equipment-edition-dialog.component'

@Component({
  selector: 'dd-player-inventory-equipments',
  templateUrl: './player-inventory-equipments.component.html',
  styleUrls: ['./player-inventory-equipments.component.scss']
})
export class PlayerInventoryEquipmentsComponent {
  @Input() equipments: Equipment[] = []

  @Output() update: EventEmitter<Equipment[]> = new EventEmitter()

  readonly displayedColumns: string[] = ['name', 'armor', 'special']

  constructor(private readonly dialog: MatDialog) {
  }

  openEquipmentEditionDialog(equipment: Equipment, equipmentIndex: number) {
    const equipmentEditionDialog = this.dialog.open(EquipmentEditionDialogComponent, {
      autoFocus: false,
      data: { equipment }
    })

    equipmentEditionDialog.afterClosed()
      .subscribe((newEquipment: Equipment | -1) => {
        if (!!!newEquipment) {
          return
        }

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
      .subscribe((newEquipment: Equipment) => {
        this.update.emit([...this.equipments, newEquipment])
      })
  }
}
