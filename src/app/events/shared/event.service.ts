import { Injectable } from '@angular/core';
import { events } from './events';
import { IEvent } from './event.model';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class EventService {
  getEvents(): Observable<IEvent[]> {
    const subject = new Subject<IEvent[]>();
    setTimeout(() => {
      subject.next(events);
      subject.complete();
    }, 100);
    return subject;
  }

  getEvent(id: number): IEvent {
    return events.find(event => event.id === id);
  }

  saveEvent(newEvent) {
    newEvent.id = 999;
    newEvent.session = [];
    events.push(newEvent);
  }

  updateEvent(event){
    let index = events.findIndex(x => x.id = event.id);
    events[index] = event;
  }
}
