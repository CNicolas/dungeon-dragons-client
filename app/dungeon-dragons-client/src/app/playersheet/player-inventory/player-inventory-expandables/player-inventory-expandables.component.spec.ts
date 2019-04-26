import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PlayerInventoryExpandablesComponent } from './player-inventory-expandables.component'

describe('PlayerInventoryExpandablesComponent', () => {
  let component: PlayerInventoryExpandablesComponent
  let fixture: ComponentFixture<PlayerInventoryExpandablesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerInventoryExpandablesComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInventoryExpandablesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
