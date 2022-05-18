//This service is used to retrieve all event objects prior to the Events List Component loading
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from "./shared/event.service";
import { map } from 'rxjs/operators'

@Injectable()
export class EventListResolver implements Resolve<any>  {
    constructor(private eventService: EventService) {}

    resolve() {
        return this.eventService.getEvents().pipe(map(events => events))
    }
}