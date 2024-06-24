import { Routes } from '@angular/router';
import { authenticationGuard } from './guards/authentication.guard';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tickets',
    pathMatch: 'full',
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    canActivate: [authenticationGuard],
    children: [
      {
        path: 'tickets',
        loadComponent: () =>
          import('./pages/tickets/tickets.component').then(
            (m) => m.TicketsComponent
          ),
        },
        {
        path: 'add-user',
        canActivate: [adminGuard],
        loadComponent: () =>
          import('./pages/add-user/add-user.component').then(
            (m) => m.AddUserComponent
          ),
        },
      {
        path: 'users',
        canActivate: [adminGuard],
        loadComponent: () =>
          import('./pages/users/users.component').then((m) => m.UsersComponent),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'reset-pass',
    loadComponent: () =>
      import('./pages/reset-pass/reset-pass.component').then((m) => m.ResetPassComponent),
  },
];
