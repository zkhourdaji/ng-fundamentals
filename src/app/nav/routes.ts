import { Routes } from '@angular/router';

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  EventResolver
} from '../events';

import { EventListResolver } from '../events/shared';
import { Error404Component } from '../errors/Error404.component';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: {
      // events will be available in the component as
      // route.snapshot.data['events']
      events: EventListResolver
    }
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    resolve: {
      // event will be available in the component as
      // route.snapshot.data['event']
      event: EventResolver
    }
  },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule' }
];
