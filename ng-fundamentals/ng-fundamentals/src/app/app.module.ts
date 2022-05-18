import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';





import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './events-app.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { EventService } from './events/shared/event.service';
import { EventListResolver } from './events/events-list-resolver.service';
import { NavComponent } from './nav/navbar.component';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    //Route deactivate provider
    {provide: 'canDeactivateCreateEvent',
     useValue: checkDirtyState,
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

//Associated function to the route deactivator provider
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm("You haven't saved this event yet, do you really want to cancel?")

  return true
}
