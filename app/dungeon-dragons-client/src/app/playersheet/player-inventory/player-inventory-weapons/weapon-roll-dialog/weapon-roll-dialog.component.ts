import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material'
import { DicesRollResults } from '@dungeon-dragons-model/dice'
import { Weapon } from '@dungeon-dragons-model/inventory'
import { Player } from '@dungeon-dragons-model/player'
import { Characteristic } from '@dungeon-dragons-model/player/characteristic.enum'
import { calculateModifier, getPlayerCharacteristic, modifierToString } from '@dungeon-dragons-model/player/characteristics.utils'
import DiceRoller from 'roll'

@Component({
  selector: 'dd-weapon-edition-dialog',
  templateUrl: './weapon-roll-dialog.component.html',
  styleUrls: ['./weapon-roll-dialog.component.scss']
})
export class WeaponRollDialogComponent implements OnInit {
  weapon: Weapon
  player: Player

  characModifier: number
  result: DicesRollResults

  readonly characteristics: typeof Characteristic = Characteristic
  readonly diceRoller: DiceRoller = new DiceRoller()

  constructor(@Inject(MAT_DIALOG_DATA) data: { player: Player, weapon: Weapon }) {
    this.player = data.player
    this.weapon = data.weapon
  }

  ngOnInit(): void {
    this.characModifier = calculateModifier(getPlayerCharacteristic(this.player, Characteristic[this.weapon.characteristic]).value)
    this.roll()
  }

  roll() {
    const characteristicModifier: string = modifierToString(this.characModifier, true)
    const bonusModifier: string = modifierToString(this.player.bonus, true)
    const rollString = `1d20${characteristicModifier}${bonusModifier}`

    console.log(rollString)

    this.result = this.diceRoller.roll(rollString)
  }
}
