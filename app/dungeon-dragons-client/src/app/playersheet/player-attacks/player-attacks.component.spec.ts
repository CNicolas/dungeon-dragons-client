import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import {
  MatBadgeModule,
  MatButtonModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material'
import { Store } from '@ngxs/store'
import { of } from 'rxjs'
import { PlayerStoreTestingModule, TESTING_PLAYER } from '../../shared/store/player'
import { PlayerAttacksComponent } from './player-attacks.component'


describe('PlayerAttacksComponent', () => {
  let component: PlayerAttacksComponent
  let fixture: ComponentFixture<PlayerAttacksComponent>
  let store: Store

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerAttacksComponent],
      imports: [
        MatBadgeModule,
        MatButtonModule,
        MatDialogModule,
        MatGridListModule,
        MatIconModule,
        MatTableModule,
        MatTooltipModule,
        PlayerStoreTestingModule
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    store = TestBed.get(Store)
    spyOn(store, 'select').and.returnValue(of(TESTING_PLAYER))
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerAttacksComponent)
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
