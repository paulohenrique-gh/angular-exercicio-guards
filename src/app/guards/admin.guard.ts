import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { DecodedTokenWithRoles } from '../models/decoded-token-with-roles';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('token');
  let decodedToken: DecodedTokenWithRoles | undefined;
  let roles: string[] | undefined;
  if (token !== null) {
    decodedToken = jwtDecode(token);
    roles = decodedToken?.roles?.split(',');
  }

  if (roles && roles.includes('ROLE_ADMIN')) {
    return true;
  } else {
    alert('Unauthorized')
    return false;
  }
};
