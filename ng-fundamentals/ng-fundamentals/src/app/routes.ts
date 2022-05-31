//Services and components related to the "Events App" are imported from barrels to keep things tidy
import { 
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver
} from './events/index'

//Misc imports not housed within barrels
import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component';


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