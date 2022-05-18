import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventsListComponent } from "./events/events-list.component";
import { EventListResolver } from './events/events-list-resolver.service';


export const appRoutes:Routes =    [
    //Create Event page
    {path: 'events/new', component: CreateEventComponent,
     canDeactivate: ['canDeactivateCreateEvent']},
    //All events listed on one page
    {path: 'events', component: EventsListComponent, resolve:{events:EventListResolver}},
    //Uses the :id to plug in an event's id, then dislpays only
    //that event's data
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    //404 - Page Not Found
     {path: '404', component: Error404Component},
    //Sets the Events List component as the default route
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    //Routes to the User Module
    {path: 'user',
    loadChildren: () =>  import('./user/user.module')
    .then (m => m.UserModule)
     }
]