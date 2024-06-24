import { CanActivateFn, Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);
  const token = authService.getDecodedToken();

  if (token.type !== 'admin') {
    router.navigate(['/']);
    return false;
  }

  return true;
};
