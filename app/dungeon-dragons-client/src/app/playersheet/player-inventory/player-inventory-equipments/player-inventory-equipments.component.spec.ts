import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogModule, MatIconModule, MatTableModule } from '@angular/material'
import { PlayerInventoryEquipmentsComponent } from './player-inventory-equipments.component'

describe('PlayerInventoryEquipmentsComponent', () => {
  let component: PlayerInventoryEquipmentsComponent
  let fixture: ComponentFixture<PlayerInventoryEquipmentsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerInventoryEquipmentsComponent],
      imports: [
        MatDialogModule,
        MatIconModule,
        MatTableModule
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInventoryEquipmentsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
