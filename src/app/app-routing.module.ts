
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendenceSheetComponent } from './components/attendence-sheet/attendence-sheet.component';
import { HomeComponent } from './components/dashboard/home/home.component';

const routes: Routes = [
  // blank redirection
  { path: '', redirectTo: '/attendence', pathMatch: 'full' }, // blank router redirected to dashboard

  {
    path: '',
    component: HomeComponent,

    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./components/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      }, // dashboard redirect..

      { path: 'attendence', component: AttendenceSheetComponent },
    ],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
