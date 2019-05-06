import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MatButtonModule, MatDialogModule, MatIconModule, MatTableModule } from '@angular/material'
import { Store } from '@ngxs/store'
import { of } from 'rxjs'
import { PlayerStoreTestingModule, TESTING_PLAYER } from '../../../shared/store/player'
import { PlayerActionsComponent } from './player-actions.component'

describe('PlayerActionsComponent', () => {
  let component: PlayerActionsComponent
  let fixture: ComponentFixture<PlayerActionsComponent>
  let store: Store

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerActionsComponent],
      imports: [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatTableModule,
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
    fixture = TestBed.createComponent(PlayerActionsComponent)
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
