import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { StorageService } from './services/storage.service';


@Injectable({
  providedIn: 'root',
})
export class AuthguardGuard implements CanActivate {

  constructor(private authService: StorageService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    const expectedRoles = route.data['expectedRoles'];
    const role = this.authService.getRole();

    if (isLoggedIn && expectedRoles.includes(role)) {
      return true;
    }

    this.router.navigate(['/auth/login']);
    return false;
  }
}
