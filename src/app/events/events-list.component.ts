import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
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
          (click)="handleThumbnailClick(event.name)"
          [event]="event"
        ></event-thumbnail>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) {}

  handleThumbnailClick(eventName) {
    this.toastrService.success(eventName);
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
}
