import { toBase64String } from "@angular/compiler/src/output/source_map";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/event.service";


@Component({
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
  events:any
  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit()  {
    //Fetching the resolved array of event objects from the route.
    this.events = this.route.snapshot.data['events']
  }
  
  handleThumbnailClick(eventName:any)  {
    this.toastr.success(eventName)
  }
    


}