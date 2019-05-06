import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatFormFieldModule, MatInputModule } from '@angular/material'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { CharacteristicControlComponent } from '../characteristic-control/characteristic-control.component'
import { CharacteristicModifierComponent } from '../characteristic-control/characteristic-modifier/characteristic-modifier.component'

import { CharacteristicsFormComponent } from './characteristics-form.component'

describe('CharacteristicsFormComponent', () => {
  let component: CharacteristicsFormComponent
  let fixture: ComponentFixture<CharacteristicsFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CharacteristicModifierComponent,
        CharacteristicControlComponent,
        CharacteristicsFormComponent
      ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicsFormComponent)
    component = fixture.componentInstance

    const formBuilder: FormBuilder = TestBed.get(FormBuilder)
    component.characteristicsForm = formBuilder.group({
      strength: [null, Validators.required],
      dexterity: [null, Validators.required],
      constitution: [null, Validators.required],
      intelligence: [null, Validators.required],
      wisdom: [null, Validators.required],
      charisma: [null, Validators.required]
    })

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
