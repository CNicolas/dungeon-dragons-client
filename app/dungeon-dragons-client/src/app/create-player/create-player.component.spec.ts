import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DebugElement } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material'
import { By } from '@angular/platform-browser'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'
import { Race } from '@dungeon-dragons-model/player'
import { NgxsModule } from '@ngxs/store'
import { PipesModule } from '../shared/pipes/pipes.module'
import { PlayerState, PlayerStoreModule } from '../shared/store/player'

import { CreatePlayerComponent } from './create-player.component'

describe('CreatePlayerComponent', () => {
  let component: CreatePlayerComponent
  let fixture: ComponentFixture<CreatePlayerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePlayerComponent],
      imports: [
        NoopAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        NgxsModule.forRoot([PlayerState], { developmentMode: true }),
        PlayerStoreModule,
        PipesModule
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlayerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should require every field', () => {
    const createButton: DebugElement = fixture.debugElement.query(By.css('button#create'))

    expect(createButton.attributes['ng-reflect-disabled']).toEqual('true')

    component.createPlayerForm.patchValue({ race: Race.DRAGONBORN })
    fixture.detectChanges()
    expect(createButton.attributes['ng-reflect-disabled']).toEqual('true')

    component.createPlayerForm.patchValue({ name: 'John', race: Race.DRAGONBORN })
    fixture.detectChanges()
    expect(createButton.attributes['ng-reflect-disabled']).toEqual('false')
  })
})
