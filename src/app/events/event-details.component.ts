import { Component, Input, OnInit } from '@angular/core';
import { EventService, IEvent } from './shared';
import { ActivatedRoute, Params } from '@angular/router';
import { ISession } from './shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }
      .event-image {
        height: 100px;
      }
      a {cursor: pointer}
    `
  ]
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.event = data['event'];
      this.addMode = false;
    })
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(newSession: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    newSession.id = nextId + 1;
    this.event.sessions.push(newSession);
    this.eventService.saveEvent(this.event).subsrcibe();
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
