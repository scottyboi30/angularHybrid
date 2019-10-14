import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

  /**
   *
   */
  constructor(@Inject('auth') private auth) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return this.auth.requireAdmin_v2();
  }
}
