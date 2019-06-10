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
        <app-event-thumbnail
          [event]="event"
        ></app-event-thumbnail>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  // events is passed by the events resolver
  events: IEvent[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.events = this.route.snapshot.data.events;
  }
}
