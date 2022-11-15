import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HttpErrorInterceptorInterceptor } from './common-services/http-error-interceptor.interceptor';

import { ToastrModule } from 'ngx-toastr';
import { AttendenceSheetComponent } from './components/attendence-sheet/attendence-sheet.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';


@NgModule({
  declarations: [AppComponent,AttendenceSheetComponent ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
