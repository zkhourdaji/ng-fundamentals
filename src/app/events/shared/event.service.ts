import { Injectable } from '@angular/core';
import { events } from './events';

@Injectable()
export class EventService {
  getEvents() {
    return events;
  }

  getEvent(id: number) {
    return events.find(event => event.id === id);
  }
}
