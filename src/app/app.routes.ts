import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {
    path: ' ',
    component: AppComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
];
