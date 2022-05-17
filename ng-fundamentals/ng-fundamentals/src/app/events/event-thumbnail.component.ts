//This component contains the structure of each future event that is pulled from
//the back end and displays it in a specific format for each event.
// It's a child component of Events List Component

import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
    <!--Beginning of Thumbnail structure-->
    <div class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">Early Start</span>
            <span *ngSwitchCase="'10:00 am'">Late Start</span>
            <span *ngSwitchDefault>Normal Start</span>
        </div>

        <div>Price: \${{event?.price}}</div>

        <!--Determines whether the event is "online" or "in-person", and displays relevant info accordingly-->
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            Online URL: {{event?.onlineUrl}}
        </div>
    </div>
    `,
    //Maintains a set structure so that all thumbnails line up evenly 
    styles: [`
        .thumbnail{ min-height: 210px }
        .pad-left {margin-left: 10px;}
        .well div {color: #bbb}
    `]
})

export class EventThumbnailComponent    {
  @Input() event: any

  //Adds CSS styling to the event's dispayed start time based on its time of day  
  getStartTimeStyle(): any {
        if (this.event && this.event.time === '8:00 am')
            return {color: '#003300', 'font-weight': 'bold'}
        return {}
    }


}