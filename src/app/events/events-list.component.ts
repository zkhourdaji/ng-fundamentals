import { Component, OnInit } from '@angular/core';
import { EventService, IEvent } from './shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div
        [routerLink]="['/events', event.id]"
        *ngFor="let event of events"
        class="col-md-5"
      >
        <event-thumbnail
          [event]="event"
        ></event-thumbnail>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
}
