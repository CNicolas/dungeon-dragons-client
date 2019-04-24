import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PlayerCharacteristicsComponent } from './player-characteristics.component'

describe('PlayerCharacteristicsComponent', () => {
  let component: PlayerCharacteristicsComponent
  let fixture: ComponentFixture<PlayerCharacteristicsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerCharacteristicsComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCharacteristicsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
