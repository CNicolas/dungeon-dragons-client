import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatDialog } from '@angular/material'
import { Expandable } from '@dungeon-dragons-model/inventory'
import { filter } from 'rxjs/operators'
import { ExpandableEditionDialogComponent } from './expandable-edition-dialog/expandable-edition-dialog.component'

@Component({
  selector: 'dd-player-inventory-expandables',
  templateUrl: './player-inventory-expandables.component.html',
  styleUrls: ['./player-inventory-expandables.component.scss']
})
export class PlayerInventoryExpandablesComponent {
  @Input() expandables: Expandable[] = []

  @Output() update: EventEmitter<Expandable[]> = new EventEmitter()

  readonly displayedColumns: string[] = ['name', 'count', 'special']

  constructor(private readonly dialog: MatDialog) {
  }

  openExpandableEditionDialog(expandable: Expandable, expandableIndex: number) {
    const expandableEditionDialog = this.dialog.open(ExpandableEditionDialogComponent, {
      autoFocus: false,
      data: { expandable }
    })

    expandableEditionDialog.afterClosed()
      .pipe(filter((newExpandable: Expandable | -1) => !!newExpandable))
      .subscribe((newExpandable: Expandable | -1) => {
        if (newExpandable === -1) {
          this.expandables.splice(expandableIndex, 1)
        } else {
          this.expandables[expandableIndex] = newExpandable
        }

        this.update.emit([...this.expandables])
      })
  }

  openExpandableCreationDialog() {
    const expandableEditionDialog = this.dialog.open(ExpandableEditionDialogComponent)

    expandableEditionDialog.afterClosed()
      .pipe(filter((newExpandable: Expandable) => !!newExpandable))
      .subscribe((newExpandable: Expandable) => {
        this.update.emit([...this.expandables, newExpandable])
      })
  }
}
