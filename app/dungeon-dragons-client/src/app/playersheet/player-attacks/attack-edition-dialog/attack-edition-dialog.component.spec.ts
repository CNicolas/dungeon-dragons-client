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
import { AttackEditionDialogComponent } from './attack-edition-dialog.component'
import { PipesModule } from '../../../shared/pipes/pipes.module';

@NgModule({
  entryComponents: [AttackEditionDialogComponent],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ]
})
export class WeaponEditionDialogTestingModule {
}

describe('AttackEditionDialogComponent', () => {
  let component: AttackEditionDialogComponent
  let fixture: ComponentFixture<AttackEditionDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AttackEditionDialogComponent],
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
    fixture = TestBed.createComponent(AttackEditionDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
