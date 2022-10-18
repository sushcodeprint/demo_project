import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from 'src/app/common-components/header/header.component';
import { LeftMenuComponent } from '../left-menu/left-menu.component';

import { FooterComponent } from 'src/app/common-components/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    LeftMenuComponent,

    FooterComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
