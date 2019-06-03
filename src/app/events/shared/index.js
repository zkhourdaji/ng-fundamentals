import { EventListResolver } from './event-list-resolver.service';
import { EventRouteActivator } from './event-route-activator.service';
import { IEvent, ISession } from './event.model';
import { EventService } from './event.service';
import { events } from './events';
import { DurationPipe } from './duration.pipe';

export {
  EventListResolver,
  EventRouteActivator,
  IEvent, ISession,
  EventService,
  events,
  DurationPipe
}