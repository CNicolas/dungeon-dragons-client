import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CharacteristicsFormComponent } from './characteristics-form.component'

describe('CharacteristicsFormComponent', () => {
  let component: CharacteristicsFormComponent
  let fixture: ComponentFixture<CharacteristicsFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacteristicsFormComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicsFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
