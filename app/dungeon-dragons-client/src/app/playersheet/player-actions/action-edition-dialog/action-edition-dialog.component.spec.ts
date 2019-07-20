import { NgModule } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { MAT_DIALOG_DATA, MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { ActionEditionDialogComponent } from './action-edition-dialog.component'

@NgModule({
  entryComponents: [ActionEditionDialogComponent],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ]
})
export class ActionEditionDialogTestingModule {
}

describe('ActionEditionDialogComponent', () => {
  let component: ActionEditionDialogComponent
  let fixture: ComponentFixture<ActionEditionDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionEditionDialogComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        ActionEditionDialogTestingModule
      ]
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
