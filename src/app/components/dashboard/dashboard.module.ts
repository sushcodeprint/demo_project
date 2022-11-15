import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from 'src/app/common-components/header/header.component';

import { FooterComponent } from 'src/app/common-components/footer/footer.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule,RouterModule],
})
export class DashboardModule { }
