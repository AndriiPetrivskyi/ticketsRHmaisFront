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
          },
          {
            label: 'Tickets',
            icon: 'pi pi-fw pi-ticket',
            routerLink: ['/tickets'],
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
          },
        ],
      });
    }
  }
}
