import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { updateCurrentUser } from '@angular/fire/auth';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(public authService: AuthService) {}

  protected readonly updateCurrentUser = updateCurrentUser;
}
