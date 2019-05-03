import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CharacteristicControlComponent } from './characteristic-control.component'

describe('CharacteristicControlComponent', () => {
  let component: CharacteristicControlComponent
  let fixture: ComponentFixture<CharacteristicControlComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacteristicControlComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicControlComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
