import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MatButtonModule, MatIconModule, MatListModule } from '@angular/material'
import { RouterTestingModule } from '@angular/router/testing'
import { NgxsModule } from '@ngxs/store'

import { HomeComponent } from './home.component'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        RouterTestingModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        NgxsModule.forRoot([], { developmentMode: true })
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
