import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from './user';

// COMPONENTS
import {
  EventsAppComponent,
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent
} from './events';

import { CollapsibleWellComponent } from './common/collapsible-well.component';

import {
  EventService,
  EventListResolver,
  EventRouteActivator,
  DurationPipe
} from './events/shared';

import { NavbarComponent } from './nav/navbar.component';
// SERVICES
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';

import { appRoutes } from './nav/routes';
import { Error404Component } from './errors/Error404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let toastr:Toastr = window['toastr'];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavbarComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    Error404Component,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  bootstrap: [EventsAppComponent],
  providers: [
    AuthService,
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventListResolver
  ]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved this event. Do you really want to cancel?'
    );
  }
  return true;
}
