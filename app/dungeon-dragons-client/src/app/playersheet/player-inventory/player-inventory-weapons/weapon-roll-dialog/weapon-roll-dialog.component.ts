import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Weapon } from '@dungeon-dragons-model/inventory'
import { Player } from '@dungeon-dragons-model/player'

@Component({
  selector: 'dd-weapon-edition-dialog',
  templateUrl: './weapon-roll-dialog.component.html',
  styleUrls: ['./weapon-roll-dialog.component.scss']
})
export class WeaponRollDialogComponent implements OnInit {
  weapon: Weapon
  player: Player

  constructor(@Inject(MAT_DIALOG_DATA) data: { player: Player, weapon: Weapon }) {
    this.player = data.player
    this.weapon = data.weapon
  }

  ngOnInit(): void {
    this.roll()
  }

  roll() {
    console.log('Rolled')
  }
}
