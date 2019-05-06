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
import { WeaponEditionDialogComponent } from './weapon-edition-dialog.component'

@NgModule({
  entryComponents: [WeaponEditionDialogComponent],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ]
})
export class WeaponEditionDialogTestingModule {
}

describe('WeaponEditionDialogComponent', () => {
  let component: WeaponEditionDialogComponent
  let fixture: ComponentFixture<WeaponEditionDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeaponEditionDialogComponent],
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
        WeaponEditionDialogTestingModule
      ]
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
