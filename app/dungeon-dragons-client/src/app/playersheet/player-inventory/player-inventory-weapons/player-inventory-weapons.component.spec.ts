import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogModule, MatIconModule, MatTableModule } from '@angular/material'
import { PipesModule } from '../../../shared/pipes/pipes.module'
import { PlayerInventoryWeaponsComponent } from './player-inventory-weapons.component'

describe('PlayerInventoryWeaponsComponent', () => {
  let component: PlayerInventoryWeaponsComponent
  let fixture: ComponentFixture<PlayerInventoryWeaponsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerInventoryWeaponsComponent],
      imports: [
        MatDialogModule,
        MatIconModule,
        MatTableModule,
        PipesModule
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInventoryWeaponsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
