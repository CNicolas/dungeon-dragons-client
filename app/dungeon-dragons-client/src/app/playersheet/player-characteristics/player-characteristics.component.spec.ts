import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { MatBadgeModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { NgxsModule, Store } from '@ngxs/store'
import { of } from 'rxjs'
import { HelpersModule } from '../../shared/helpers/helpers.module'
import { PipesModule } from '../../shared/pipes/pipes.module'
import { TESTING_PLAYER } from '../../shared/store/player'
import { CharacteristicControlComponent } from './characteristic-control/characteristic-control.component'
import { PlayerCharacteristicsComponent } from './player-characteristics.component'

describe('PlayerCharacteristicsComponent', () => {
  let component: PlayerCharacteristicsComponent
  let fixture: ComponentFixture<PlayerCharacteristicsComponent>
  let store: Store

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CharacteristicControlComponent,
        PlayerCharacteristicsComponent
      ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatBadgeModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        NgxsModule.forRoot([], { developmentMode: true }),
        HelpersModule,
        PipesModule
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
