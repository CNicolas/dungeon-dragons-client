import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material'
import { RouterTestingModule } from '@angular/router/testing'
import { NgxsModule } from '@ngxs/store'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        NgxsModule.forRoot([], { developmentMode: true })
      ]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
