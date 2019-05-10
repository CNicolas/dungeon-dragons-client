import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger'
import { HelpersModule } from '../shared/helpers/helpers.module'
import { HttpErrorInterceptor } from './http-error.interceptor'

@NgModule({
  imports: [
    HelpersModule,
    LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ]
})
export class DdCoreModule {
}
