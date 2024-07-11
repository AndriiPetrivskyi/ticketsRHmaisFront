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
          path: 'my-tickets',
          loadComponent: () =>
            import('./pages/my-tickets/my-tickets.component').then(
              (m) => m.MyTicketsComponent
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
          path: 'add-ticket-pedido',
          loadComponent: () =>
            import('./pages/add-ticket/add-ticket-pedido/add-ticket-pedido.component').then(
              (m) => m.AddTicketPedidoComponent
            ),
          },
          {
            path: 'add-ticket-dificuldades',
            loadComponent: () =>
              import('./pages/add-ticket/add-ticket-dificuldades/add-ticket-dificuldades.component').then(
                (m) => m.AddTicketDificuldadesComponent
              ),
          },
          {
              path: 'add-ticket-salario',
              loadComponent: () =>
                import('./pages/add-ticket/add-ticket-salario/add-ticket-salario.component').then(
                  (m) => m.AddTicketSalarioComponent
                ),
          },
          {
              path: 'add-ticket-sugestoes',
              loadComponent: () =>
               import('./pages/add-ticket/add-ticket-sugestoes/add-ticket-sugestoes.component').then(
                 (m) => m.AddTicketSugestoesComponent
              ),
          },
          {
            path: 'add-report-indisponiblidade',
            loadComponent: () =>
              import('./pages/add-report/add-report.component').then(
                (m) => m.AddReportComponent
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
    path: 'reset-password/:token',
    loadComponent: () =>
      import('./pages/reset-pass/reset-pass.component').then((m) => m.ResetPassComponent),
  },
  {
    path: 'reset-pass-request',
    loadComponent: () =>
      import('./pages/reset-pass-request/reset-pass-request.component').then((m) => m.ResetPassRequestComponent),
  },
];
