import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatDialog } from '@angular/material'
import { OtherItem } from '@dungeon-dragons-model/inventory'
import { filter } from 'rxjs/operators'
import { OtherItemEditionDialogComponent } from './otherItem-edition-dialog/otherItem-edition-dialog.component'

@Component({
  selector: 'dd-player-inventory-otheritems',
  templateUrl: './player-inventory-otherItems.component.html',
  styleUrls: ['../../table.scss', './player-inventory-otherItems.component.scss']
})
export class PlayerInventoryOtherItemsComponent {
  @Input() otherItems: OtherItem[] = []

  @Output() update: EventEmitter<OtherItem[]> = new EventEmitter()

  readonly displayedColumns: string[] = ['name', 'special']

  constructor(private readonly dialog: MatDialog) {
  }

  openOtherItemEditionDialog(otherItem: OtherItem, otherItemIndex: number) {
    const otherItemEditionDialog = this.dialog.open(OtherItemEditionDialogComponent, {
      autoFocus: false,
      data: {otherItem}
    })

    otherItemEditionDialog.afterClosed()
      .pipe(filter((newOtherItem: OtherItem | -1) => !!newOtherItem))
      .subscribe((newOtherItem: OtherItem | -1) => {
        if (newOtherItem === -1) {
          this.otherItems.splice(otherItemIndex, 1)
        } else {
          this.otherItems[otherItemIndex] = newOtherItem
        }

        this.update.emit([...this.otherItems])
      })
  }

  openOtherItemCreationDialog() {
    const otherItemEditionDialog = this.dialog.open(OtherItemEditionDialogComponent)

    otherItemEditionDialog.afterClosed()
      .pipe(filter((newOtherItem: OtherItem) => !!newOtherItem))
      .subscribe((newOtherItem: OtherItem) => {
        this.update.emit([...this.otherItems, newOtherItem])
      })
  }
}
