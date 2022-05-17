import { toBase64String } from "@angular/compiler/src/output/source_map";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/event.service";


@Component({
    selector: 'events-list',
    template: `
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row" >
        <!--Retrieves all event objects, sends them over to
          The thumbnail component for structuring, then
        displays an instances of thumbnail object for each event-->
        <div class="col-md-5" *ngFor="let event of events">
        <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
    </div>
</div>
    `
})



export class EventsListComponent implements OnInit {
  events?:any[]
  constructor(private eventService: EventService, private toastr: ToastrService) { }

  ngOnInit()  {
    //Ensuring all event objects are loaded as soon as the component is loaded
    this.events = this.eventService.getEvents()
  }
  
  handleThumbnailClick(eventName:any)  {
    this.toastr.success(eventName)
  }
    


}