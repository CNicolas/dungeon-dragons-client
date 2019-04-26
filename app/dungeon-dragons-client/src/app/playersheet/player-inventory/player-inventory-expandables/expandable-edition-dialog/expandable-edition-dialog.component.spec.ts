import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ExpandableEditionDialogComponent } from './expandable-edition-dialog.component'

describe('ExpandableEditionDialogComponent', () => {
  let component: ExpandableEditionDialogComponent
  let fixture: ComponentFixture<ExpandableEditionDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandableEditionDialogComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableEditionDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
