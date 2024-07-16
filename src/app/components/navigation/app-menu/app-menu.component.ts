import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMenuitemComponent } from '../app-menu-item/app-menu-item.component';
import { LayoutService } from '../../../services/app-layout.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  standalone: true,
  imports: [CommonModule, AppMenuitemComponent],
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(
    public layoutService: LayoutService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          {
            label: 'My tickets',
            icon: 'pi pi-fw pi-user',
            routerLink: ['/my-tickets'],
            title: 'Tickets criados por si'
          },
          {
            label: 'Tickets',
            icon: 'pi pi-fw pi-ticket',
            routerLink: ['/tickets'],
            title: 'Todos os tickets'
          },
          {
            label: 'Criar ticket',
            icon: 'pi pi-fw pi-plus-circle',
            title: '',
            items: [
              {
                label: 'Pedido de Esclarcimento',
                routerLink: ['/add-ticket-pedido'],
                title: 'Utilize esta opção para realizar questóes relativas a opções/funcionalidades já existentes nas aplicações'
              },
              {
                label: 'Report de dificuldades',
                routerLink: ['/add-ticket-dificuldades'],
                title: 'Utilize esta opção para reportar casos concretos/particulares de falha na utilização de uma funcionalidade aplicacional'
              },
              {
                label: 'Exportação salarial',
                routerLink: ['/add-ticket-salario'],
                title: 'Utilize esta opção para reportar problemas particulares de exportação salarial'
              },
              {
                label: 'Envio de Sugestões',
                routerLink: ['/add-ticket-sugestoes'],
                title: 'Utilize esta opção para enviar sugestões de melhorias e desenvolvimento futuro das aplicações'
              },
            ]
          },
          {
            label: 'Report Indisponiblidade',
            icon: 'pi pi-fw pi-exclamation-triangle',
            routerLink: ['/add-report-indisponiblidade'],
            title: 'Utilize esta opção para reportar indisponiblidades totais/críticas de uma/todas as aplicações. Estes ticket seráo tratados prioritariamente'
          },
        ],
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Logout',
            icon: 'pi pi-fw pi-sign-out',
            command: () => {
              this.authService.logout();
            },
            title: 'Terminar sessão'
          },
        ],
      },
    ];

    if (this.authService.getDecodedToken().type === 'admin') {
      this.model.splice(1, 0, {
        label: 'Area de admin',
        items: [
          {
            label: 'Utilizadores',
            icon: 'pi pi-fw pi-id-card',
            routerLink: ['/users'],
            title: ''
          },
        ],
      });
    }
  }
}
