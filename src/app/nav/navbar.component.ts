import { Component } from '@angular/core';
import { AuthService } from '../user';
import { ISession } from '../events/shared/event.model';
import { EventService } from '../events/shared/event.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styles: [
    `
    .nav.navbar-nav {font-size: 15:px;}
    #searchForm {margin-right: 100px}
    @media (max-width: 1200px) {#searchForm {display:none}}
    li > a.active {color: #f97924}
    `
  ]
})
export class NavbarComponent {

  searchTerm = '';
  foundSessions: ISession[];

  // AuthService is used inside the template to display the username if they're logged in
  constructor(public authService: AuthService, private eventService: EventService) { }

  // gets called when the user submits the search form in the navbar
  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => this.foundSessions = sessions);
  }
}
