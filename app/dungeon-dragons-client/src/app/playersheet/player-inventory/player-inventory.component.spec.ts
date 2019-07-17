import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import {
  MatButtonModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { NgxsModule } from '@ngxs/store'
import { PipesModule } from '../../shared/pipes/pipes.module'
import { PlayerInventoryEquipmentsComponent } from './player-inventory-equipments'
import { PlayerInventoryExpandablesComponent } from './player-inventory-expandables'
import { PlayerInventoryOtherItemsComponent } from './player-inventory-other-items'
import { PlayerInventoryWeaponsComponent } from './player-inventory-weapons'
import { PlayerInventoryComponent } from './player-inventory.component'

describe('PlayerInventoryComponent', () => {
  let component: PlayerInventoryComponent
  let fixture: ComponentFixture<PlayerInventoryComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlayerInventoryEquipmentsComponent,
        PlayerInventoryExpandablesComponent,
        PlayerInventoryOtherItemsComponent,
        PlayerInventoryWeaponsComponent,
        PlayerInventoryComponent
      ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        NgxsModule.forRoot([], { developmentMode: true }),
        PipesModule
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInventoryComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
