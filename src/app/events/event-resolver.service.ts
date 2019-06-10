import { EventService } from './shared/event.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class EventResolver implements Resolve<any> {
  constructor(private eventService: EventService) {

  }

  /*
  Resolver will run before the instantiation of EventsListComponent.
  the returned data is available to the component under this.route.snapshot.data
  */
  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params.id);
  }
}
