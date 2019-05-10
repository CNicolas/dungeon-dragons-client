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
import { DdCoreModule } from '../../../../core/dd-core.module'
import { PipesModule } from '../../../../shared/pipes/pipes.module'
import { TESTING_PLAYER } from '../../../../shared/store/player'
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
        DdCoreModule,
        PipesModule,
        WeaponRollDialogTestingModule
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponRollDialogComponent)
    component = fixture.componentInstance
    component.player = TESTING_PLAYER
    component.weapon = { name: 'WeaponName', range: 'ENGAGED', touch: 0, damage: 0, characteristic: 'STRENGTH' }
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
