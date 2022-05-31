//This is the primary module that the user starts in.


//Services and components related to the "Events App" are imported from barrels to keep things tidy
import{
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from "./events/index"


//Core Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';


//Misc imports not housed within barrels
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './events-app.component';
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
