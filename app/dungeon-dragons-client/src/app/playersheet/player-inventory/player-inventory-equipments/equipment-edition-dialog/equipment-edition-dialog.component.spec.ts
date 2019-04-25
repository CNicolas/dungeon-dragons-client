import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { EquipmentEditionDialogComponent } from './equipment-edition-dialog.component'

describe('EquipmentEditionDialogComponent', () => {
  let component: EquipmentEditionDialogComponent
  let fixture: ComponentFixture<EquipmentEditionDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentEditionDialogComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentEditionDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
