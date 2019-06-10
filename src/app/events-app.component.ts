import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-events',
  template: `
    <app-nav-bar></app-nav-bar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // on app load or page refresh set the current user inside the auth service if they already logged in
    this.authService.checkAuthenticationStatus();
  }
}
