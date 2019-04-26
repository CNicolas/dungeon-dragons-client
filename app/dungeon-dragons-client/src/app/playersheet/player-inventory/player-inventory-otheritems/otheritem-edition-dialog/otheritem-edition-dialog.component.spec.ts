import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { OtheritemEditionDialogComponent } from './otheritem-edition-dialog.component'

describe('OtheritemEditionDialogComponent', () => {
  let component: OtheritemEditionDialogComponent
  let fixture: ComponentFixture<OtheritemEditionDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OtheritemEditionDialogComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(OtheritemEditionDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
