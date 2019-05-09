import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { MatBadgeModule, MatInputModule } from '@angular/material'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { CharacteristicControlComponent } from './characteristic-control.component'

describe('CharacteristicControlComponent', () => {
  let component: CharacteristicControlComponent
  let fixture: ComponentFixture<CharacteristicControlComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacteristicControlComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatBadgeModule,
        MatInputModule
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicControlComponent)
    component = fixture.componentInstance
    component.characteristicControl = new FormControl()
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
