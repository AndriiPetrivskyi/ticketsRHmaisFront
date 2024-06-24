import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { UsersService } from '../../services/users.service';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { TagModule } from 'primeng/tag';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule, TagModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users: any[] = [];
  constructor(private usersService: UsersService) {}
  ngOnInit() {
    this.usersService.getUsers().subscribe((res) => {
      this.users = res.body as any;
    });
  }

  changeStatus(id: number, status: string) {
    this.usersService.changeStatus(id, status).subscribe(Response => {
      window.location.reload();
    })
  }

  getSeverity(type: string) {
    if(type === "Enabled") {
          return 'success';
    } else {
          return 'danger';
    }
}
}
