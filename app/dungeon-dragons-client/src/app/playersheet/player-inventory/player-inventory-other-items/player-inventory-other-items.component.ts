import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatDialog } from '@angular/material'
import { OtherItem } from '@dungeon-dragons-model/inventory'
import { filter } from 'rxjs/operators'
import { OtherItemEditionDialogComponent } from './other-item-edition-dialog/other-item-edition-dialog.component'

@Component({
  selector: 'dd-player-inventory-other-items',
  templateUrl: './player-inventory-other-items.component.html',
  styleUrls: ['../../table.scss', './player-inventory-other-items.component.scss']
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
