import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { WeaponEditionDialogComponent } from './weapon-edition-dialog.component'

describe('WeaponEditionDialogComponent', () => {
  let component: WeaponEditionDialogComponent
  let fixture: ComponentFixture<WeaponEditionDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeaponEditionDialogComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponEditionDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
