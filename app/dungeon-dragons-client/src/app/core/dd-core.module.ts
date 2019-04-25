import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { HelpersModule } from '../shared/helpers/helpers.module'
import { HttpErrorInterceptor } from './http-error.interceptor'

@NgModule({
  imports: [HelpersModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ]
})
export class DdCoreModule {
}
