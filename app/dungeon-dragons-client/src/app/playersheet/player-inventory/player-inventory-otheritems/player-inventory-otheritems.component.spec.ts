import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { PlayerInventoryOtherItemsComponent } from './player-inventory-otheritems.component'

describe('PlayerInventoryOtherItemsComponent', () => {
  let component: PlayerInventoryOtherItemsComponent
  let fixture: ComponentFixture<PlayerInventoryOtherItemsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerInventoryOtherItemsComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInventoryOtherItemsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
