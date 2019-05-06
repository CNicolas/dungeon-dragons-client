import { NgModule } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { MAT_DIALOG_DATA, MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { EquipmentEditionDialogComponent } from './equipment-edition-dialog.component'

@NgModule({
  entryComponents: [EquipmentEditionDialogComponent],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ]
})
export class EquipmentEditionDialogTestingModule {
}

describe('EquipmentEditionDialogComponent', () => {
  let component: EquipmentEditionDialogComponent
  let fixture: ComponentFixture<EquipmentEditionDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentEditionDialogComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        EquipmentEditionDialogTestingModule
      ]
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
