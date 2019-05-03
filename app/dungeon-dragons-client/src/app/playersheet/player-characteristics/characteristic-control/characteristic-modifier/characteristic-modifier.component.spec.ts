import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CharacteristicModifierComponent } from './characteristic-modifier.component'

describe('CharacteristicModifierComponent', () => {
  let component: CharacteristicModifierComponent
  let fixture: ComponentFixture<CharacteristicModifierComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacteristicModifierComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicModifierComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
