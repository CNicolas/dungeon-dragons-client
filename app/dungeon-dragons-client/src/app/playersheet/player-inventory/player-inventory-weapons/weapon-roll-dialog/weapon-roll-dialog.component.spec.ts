import { NgModule } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import {
  MAT_DIALOG_DATA,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { PipesModule } from '../../../../shared/pipes/pipes.module'
import { WeaponRollDialogComponent } from './weapon-roll-dialog.component'

@NgModule({
  entryComponents: [WeaponRollDialogComponent],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ]
})
export class WeaponRollDialogTestingModule {
}

describe('WeaponRollDialogComponent', () => {
  let component: WeaponRollDialogComponent
  let fixture: ComponentFixture<WeaponRollDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeaponRollDialogComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        PipesModule,
        WeaponRollDialogTestingModule
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponRollDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
