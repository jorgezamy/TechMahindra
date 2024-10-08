import { Routes } from '@angular/router';

import { ReportList } from './pages/report-list/report-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'reports', pathMatch: 'full' },
  { path: 'reports', component: ReportList },
];
