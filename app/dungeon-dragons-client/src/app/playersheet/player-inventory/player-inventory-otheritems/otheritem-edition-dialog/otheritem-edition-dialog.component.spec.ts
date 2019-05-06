import { NgModule } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { MAT_DIALOG_DATA, MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { OtherItemEditionDialogComponent } from './otheritem-edition-dialog.component'

@NgModule({
  entryComponents: [OtherItemEditionDialogComponent],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ]
})
export class OtherItemEditionDialogTestingModule {
}

describe('OtherItemEditionDialogComponent', () => {
  let component: OtherItemEditionDialogComponent
  let fixture: ComponentFixture<OtherItemEditionDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OtherItemEditionDialogComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        OtherItemEditionDialogTestingModule
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherItemEditionDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
