import { EventService } from './shared/event.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class EventResolver implements Resolve<any> {
  constructor(private eventService: EventService) {

  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params.id);
  }
}
