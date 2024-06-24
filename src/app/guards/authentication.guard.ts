import { CanActivateFn, Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { inject } from '@angular/core';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);
  const token = authService.getDecodedToken();

  if (!token || token.exp < Date.now() / 1000) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
