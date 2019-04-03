import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    // private router: Router,
    // private authService: AuthService
    ) {
 }
 canActivate() {
   return true;
  //  if (this.authService.isLoggedIn()) {
  //     return true;
  //  } else {
  //     this.router.navigate(['/home']);
  //     return false;
  //  }
}
}
