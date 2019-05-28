import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { NavbarComponent } from './nav/navbar.component';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details.component';

// SERVICES
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';

import { appRoutes } from './nav/routes';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    NavbarComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent
  ],
  bootstrap: [EventsAppComponent],
  providers: [EventService, ToastrService]
})
export class AppModule {}
