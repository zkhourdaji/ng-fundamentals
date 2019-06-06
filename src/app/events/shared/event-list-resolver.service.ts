import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './event.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) { }

  // angular automatically subscribes to observables in resolvers
  resolve() {
    return this.eventService.getEvents();
  }
}
