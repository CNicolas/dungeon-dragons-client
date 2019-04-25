import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PlayerInventoryWeaponsComponent } from './player-inventory-weapons.component'

describe('PlayerInventoryWeaponsComponent', () => {
  let component: PlayerInventoryWeaponsComponent
  let fixture: ComponentFixture<PlayerInventoryWeaponsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerInventoryWeaponsComponent]
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
