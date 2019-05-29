import { Injectable } from '@angular/core';
import { events } from './events';
import { Subject } from 'rxjs';

@Injectable()
export class EventService {
  getEvents() {
    let subject = new Subject();
    setTimeout(() => {
      subject.next(events);
      subject.complete();
    }, 2000);
    return subject;
  }

  getEvent(id: number) {
    return events.find(event => event.id === id);
  }
}
