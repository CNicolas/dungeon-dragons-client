import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ActionEditionDialogComponent } from './action-edition-dialog.component'

describe('ActionEditionDialogComponent', () => {
  let component: ActionEditionDialogComponent
  let fixture: ComponentFixture<ActionEditionDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionEditionDialogComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionEditionDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
