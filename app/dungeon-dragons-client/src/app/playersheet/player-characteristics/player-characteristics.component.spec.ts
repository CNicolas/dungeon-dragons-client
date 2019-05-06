import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule, MatInputModule } from '@angular/material'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { NgxsModule, Store } from '@ngxs/store'
import { of } from 'rxjs'
import { TESTING_PLAYER } from '../../shared/store/player'
import { CharacteristicControlComponent } from './characteristic-control/characteristic-control.component'
import { CharacteristicModifierComponent } from './characteristic-control/characteristic-modifier/characteristic-modifier.component'
import { CharacteristicsFormComponent } from './characteristics-form/characteristics-form.component'
import { PlayerCharacteristicsComponent } from './player-characteristics.component'

describe('PlayerCharacteristicsComponent', () => {
  let component: PlayerCharacteristicsComponent
  let fixture: ComponentFixture<PlayerCharacteristicsComponent>
  let store: Store

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CharacteristicModifierComponent,
        CharacteristicControlComponent,
        CharacteristicsFormComponent,
        PlayerCharacteristicsComponent
      ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        NgxsModule.forRoot([], { developmentMode: true })
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    store = TestBed.get(Store)
    spyOn(store, 'select').and.returnValue(of(TESTING_PLAYER))
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCharacteristicsComponent)
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
