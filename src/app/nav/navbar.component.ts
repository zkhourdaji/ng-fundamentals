import { Component } from '@angular/core';
import { AuthService } from '../user';
import { ISession } from '../events/shared/event.model';
import { EventService } from '../events/shared/event.service';

@Component({
  selector: 'nav-bar',
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

  searchTerm: string = "";
  foundSessions: ISession[];

  constructor(public authService: AuthService,
    private eventService: EventService) {
  }

  searchSessions(searchTerm) {
     this.eventService.searchSessions(searchTerm).subscribe(sessions => this.foundSessions = sessions);
  }
}
